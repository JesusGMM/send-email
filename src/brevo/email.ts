import nodemailer from 'nodemailer';

import { DataEmail, Template } from './';
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

export const sendEmailFile = async (data: DataEmail): Promise<boolean> => {

  try {
    await transporter.sendMail({
      from: data.fromEmail,
      to: data.toEmail,
      subject: data.subject,
      html: Template(data.title, data.text),
      attachments: [
        {
          filename: data.filename,
          content: data.buffer,
          contentType: data.contentType
        }
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
