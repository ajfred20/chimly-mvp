declare module 'nodemailer' {
  export function createTransport(options: {
    service: string;
    auth: {
      user: string;
      pass: string;
    };
  }): {
    sendMail(options: {
      from: string;
      to: string;
      subject: string;
      html: string;
    }): Promise<any>;
  };
} 