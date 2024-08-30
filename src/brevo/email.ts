import nodemailer from 'nodemailer';

import { DataEmail, DataEmailFile, Template } from './';
import { envs } from '../config/envs';

const transporter = nodemailer.createTransport({
  host: envs.HOST_EMAIL,
  port: envs.PORT_EMAIL,
  secure: false,
  auth: {
    user: envs.USER_EMAIL,
    pass: envs.PASSWORD_EMAIL
  },
  tls: {
    rejectUnauthorized: envs.REJECT_UNAUTHORIZED
  }
});

export const sendEmailFile = async ({ title, toEmail: to, subject, filename, path, fromEmail }: DataEmailFile): Promise<boolean> => {

  try {
    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: subject,
      html: Template(title, title),
      attachments: [
        { filename, path }
      ]
    });

    return true;
  }
  catch (error) {
    console.error(error);
    return false;
  }

};

export const sendEmail = async ({ title, toEmail: to, subject, text, fromEmail }: DataEmail): Promise<boolean> => {

  try {
    await transporter.sendMail({
      from: fromEmail,
      to,
      subject: subject,
      html: Template(title, text)
    });

    return true;
  }
  catch (error) {
    console.error(error);
    return false;
  }

};
