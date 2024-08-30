import { z } from 'zod';
import { envs } from '../config/envs';

export const sendEmailSchema = z.object({
  body: z.object({
    key: z.string({ message: 'La llave es requerida' }).min(12, 'La llave es invalida').refine((key) => (key !== envs.KEY, {
      message: 'La llave es invalida'
    })),
    fromEmail: z.string({ message: 'El remitente es requerido' }).email({ message: 'El correo del remitente es invalido' }),
    subject: z.string({ message: 'El asunto del correo es requerido' }).min(4, 'El asunto debe ser mayor 4 letras'),
    title: z.string({ message: 'El titulo del correo es requerido' }).min(4, 'El titulo debe ser mayor 4 letras'),
    toEmail: z.string({ message: 'El destinatario es requerido' }).email({ message: 'El correo del destinatario es invalido' }),
    text: z.string({ message: 'El texto es requerido' }).min(4, 'El texto debe ser mayor 4 letras')
  })
});