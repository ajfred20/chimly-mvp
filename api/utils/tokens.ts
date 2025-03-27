import crypto from 'crypto';

export const generateVerificationToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const generateInviteToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};