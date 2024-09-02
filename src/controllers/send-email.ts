import { Request, Response } from 'express';
import { DataEmail, sendEmail, sendEmailFile } from '../brevo';

export const sendEmailController = async (req: Request, res: Response) => {
  try {

    const data: DataEmail = req.body;
    await sendEmail(data);
    res.status(200).json({ msg: 'Correo electrónico enviado!!' });

  }
  catch (error: any) {
    res.status(404).send({ msj: 'Error al enviar el correo electrónico', error });
  }
};

export const sendEmailFileController = async (req: Request, res: Response) => {
  try {

    const data: DataEmail = req.body;
    data.filename = req.file?.originalname;
    data.buffer = req.file?.buffer;
    data.contentType = req.file?.mimetype;

    await sendEmailFile(data);
    res.status(200).json({ msg: 'Correo electrónico enviado!!' });

  }
  catch (error: any) {
    res.status(404).send({ msj: 'Error al enviar el correo electrónico', error });
  }
};