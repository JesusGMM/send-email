export * from './email';
export * from './email';
export * from './template';

export interface DataEmail {
  title: string;
  toEmail: string;
  subject: string;
  text: string;
  fromEmail: string;
}

export interface DataEmailFile extends DataEmail {
  filename: string;
  path: string;
}