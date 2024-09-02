import { NextFunction, Request, Response } from 'express';

import multer from 'multer';
import path from 'path';

import { FORMATS } from '../config/';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 10 // 10MB
  },
  fileFilter: function (_req, file, callback) {

    const ext = path.extname(file.originalname).toUpperCase();
    if (FORMATS.includes(ext))
      callback(null, true);
    else
      callback(null, false);

  }
});

export const uploadFileMulter = (req: Request, res: Response, next: NextFunction) => {
  const multerUpload = upload.single('file');

  multerUpload(req, res, (err: any): any => {
    if (err)
      return res.status(400).json({ error: err.message });

    if (!req.file)
      return res.status(400).json({ error: 'No se ha subido ningún archivo o el formato es incorrecto.' });

    next();
  });
};

export const uploadFileArrayMulter = (req: Request, response: Response, next: NextFunction) => {
  const multerUpload = upload.array('files', 5);

  multerUpload(req, response, (err: any): any => {
    if (err)
      return response.status(400).json({ error: err.message, response });

    next();
  });
};
