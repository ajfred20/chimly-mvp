import express, { Request, Response, NextFunction } from 'express';
import { authenticateToken } from '../middleware/auth';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { sendTeamInviteEmail } from '../utils/email';
import { generateInviteToken } from '../utils/tokens';

const router = express.Router();

// Update team member role
router.put('/roles', authenticateToken, async (req: Request, res: Response): Promise<void> => {
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
      res.status(403).json({ error: 'Not authorized to update roles' });
      return;
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

    res.status(200).json({ message: 'Role updated successfully' });
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).json({ error: 'Failed to update role' });
  }
});

// Get team members
router.get('/members', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const team = await Team.findOne({
      'members.userId': req.user.id
    }).populate('members.userId', 'name email');

    if (!team) {
      res.status(404).json({ error: 'Team not found' });
      return;
    }

    const members = team.members.map((member: any) => ({
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
router.post('/invite', authenticateToken, async (req: Request, res: Response): Promise<void> => {
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
      res.status(403).json({ error: 'Not authorized to invite members' });
      return;
    }

    // Generate invite token and send email
    const inviteToken = generateInviteToken();
    await sendTeamInviteEmail(email, inviteToken, team.name);

    res.status(200).json({ message: 'Invitation sent successfully' });
  } catch (error) {
    console.error('Error sending invitation:', error);
    res.status(500).json({ error: 'Failed to send invitation' });
  }
});

export default router; 