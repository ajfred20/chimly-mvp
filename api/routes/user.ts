import express, { Request, Response, NextFunction } from 'express';
import { authenticateToken } from '../middleware/auth';
import { generateSecret, verifyToken } from 'speakeasy';
import { User } from '../models/User';
import { sendVerificationEmail } from '../utils/email';
import { generateVerificationToken } from '../utils/tokens';

const router = express.Router();

// Update user profile
router.put('/profile', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const user = await User.findByIdAndUpdate(
      userId,
      { name },
      { new: true }
    ).select('-password');

    res.json(user);
    return;
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
    return;
  }
});

// Setup 2FA
router.post('/2fa/setup', authenticateToken, async (req: Request, res: Response): Promise<void> => {
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
    return;
  } catch (error) {
    res.status(500).json({ error: 'Failed to setup 2FA' });
    return;
  }
});

// Verify 2FA
router.post('/2fa/verify', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const { code } = req.body;
    const userId = req.user.id;
    
    const user = await User.findById(userId);
    if (!user?.twoFactorSecret) {
      res.status(400).json({ error: '2FA not setup' });
      return;
    }

    const verified = verifyToken({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: code
    });

    if (!verified) {
      res.status(400).json({ error: 'Invalid code' });
      return;
    }

    await User.findByIdAndUpdate(userId, {
      twoFactorEnabled: true
    });

    res.json({ success: true });
    return;
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify 2FA' });
    return;
  }
});

// Send email verification
router.post('/email/verify/send', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const verificationToken = generateVerificationToken();
    
    await User.findByIdAndUpdate(userId, {
      emailVerificationToken: verificationToken,
      emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    });

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    res.json({ success: true });
    return;
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification email' });
    return;
  }
});

export default router; 