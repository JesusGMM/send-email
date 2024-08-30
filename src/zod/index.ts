import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const schemaValidation = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {

  try {
    await schema.parseAsync({ body: req.body });
    next();
    return;
  }
  catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error.issues);
    }
    return res.status(400).json({ message: `General validation internal server ${error}` });
  }
};