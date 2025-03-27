import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { Team, TeamMember } from '../models/Team';
import { User } from '../models/User';

const router = express.Router();

// Update team member role
router.put('/roles', authenticateToken, async (req, res) => {
  try {
    const { userId, role } = req.body;
    const adminId = req.user.id;

    // Check if admin has permission
    const team = await Team.findOne({
      'members': {
        $elemMatch: {
          userId: adminId,
          role: { $in: ['Admin', 'Product Manager'] }
        }
      }
    });

    if (!team) {
      return res.status(403).json({ error: 'Not authorized to update roles' });
    }

    // Update member role
    await Team.findOneAndUpdate(
      { 'members.userId': userId },
      { 
        $set: { 
          'members.$.role': role 
        }
      }
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update role' });
  }
});

// Get team members
router.get('/members', authenticateToken, async (req, res) => {
  try {
    const team = await Team.findOne({
      'members.userId': req.user.id
    }).populate('members.userId', 'name email');

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    const members = team.members.map(member => ({
      id: member.userId._id,
      name: member.userId.name,
      email: member.userId.email,
      role: member.role,
      isAdmin: member.role === 'Admin'
    }));

    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
});

// Invite team member
router.post('/invite', authenticateToken, async (req, res) => {
  try {
    const { email, role } = req.body;
    const adminId = req.user.id;

    // Check if admin has permission
    const team = await Team.findOne({
      'members': {
        $elemMatch: {
          userId: adminId,
          role: 'Admin'
        }
      }
    });

    if (!team) {
      return res.status(403).json({ error: 'Not authorized to invite members' });
    }

    // Generate invite token and send email
    const inviteToken = generateInviteToken();
    await sendTeamInviteEmail(email, inviteToken, team.name);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send invite' });
  }
});

export default router; 