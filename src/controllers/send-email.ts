import { Request, Response } from 'express';
import { DataEmail, sendEmail } from '../brevo';

export const sendEmailController = async (req: Request, res: Response) => {
  try {

    const data = req.body as DataEmail;
    await sendEmail(data);
    res.status(200).json({ msg: 'Correo electrónico enviado!!' });

  }
  catch (error: any) {
    res.status(404).send({ msj: 'Error al enviar el correo electrónico', error });
  }
};