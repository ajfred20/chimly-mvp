import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { generateSecret, verifyToken } from 'speakeasy';
import { User } from '../models/User';

const router = express.Router();

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const user = await User.findByIdAndUpdate(
      userId,
      { name },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Setup 2FA
router.post('/2fa/setup', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const secret = generateSecret({
      name: 'Chimly',
      issuer: 'Chimly Task Manager'
    });

    await User.findByIdAndUpdate(userId, {
      twoFactorSecret: secret.base32,
      twoFactorEnabled: false
    });

    res.json({
      qrCode: secret.otpauth_url,
      secret: secret.base32
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to setup 2FA' });
  }
});

// Verify 2FA
router.post('/2fa/verify', authenticateToken, async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user.id;
    
    const user = await User.findById(userId);
    if (!user?.twoFactorSecret) {
      return res.status(400).json({ error: '2FA not setup' });
    }

    const verified = verifyToken({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: code
    });

    if (!verified) {
      return res.status(400).json({ error: 'Invalid code' });
    }

    await User.findByIdAndUpdate(userId, {
      twoFactorEnabled: true
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify 2FA' });
  }
});

// Send email verification
router.post('/email/verify/send', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const verificationToken = generateVerificationToken();
    
    await User.findByIdAndUpdate(userId, {
      emailVerificationToken: verificationToken,
      emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    });

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification email' });
  }
});

export default router; 