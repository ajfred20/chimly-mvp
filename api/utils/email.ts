import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // Configure your email service
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'defaultUser@example.com',
    pass: process.env.EMAIL_PASSWORD || 'defaultPassword',
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'no-reply@example.com',
    to: email,
    subject: 'Verify your email address',
    html: `
      <h1>Verify your email</h1>
      <p>Click the link below to verify your email address:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
    `,
  });
};

export const sendTeamInviteEmail = async (email: string, token: string, teamName: string) => {
  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/team/join?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'no-reply@example.com',
    to: email,
    subject: `Invitation to join ${teamName}`,
    html: `
      <h1>Team Invitation</h1>
      <p>You've been invited to join ${teamName}. Click the link below to accept:</p>
      <a href="${inviteUrl}">${inviteUrl}</a>
    `,
  });
};