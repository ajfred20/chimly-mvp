declare module 'speakeasy' {
  export function generateSecret(options: {
    name: string;
    issuer: string;
  }): {
    base32: string;
    otpauth_url: string;
  };

  export function verifyToken(options: {
    secret: string;
    encoding: string;
    token: string;
  }): boolean;
} 