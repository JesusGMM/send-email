import { Request, Response } from 'express';

export const error = async (req: Request, res: Response) => {
  res.status(404).send({ msj: 'El recurso no existe' });
};