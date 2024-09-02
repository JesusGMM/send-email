import { Router } from 'express';
import { envs } from '../config/envs';

import { schemaValidation } from '../zod';
import { sendEmailSchema } from '../validators';
import { uploadFileMulter } from '../multer';

import { error } from '../controllers/error';
import { sendEmailController, sendEmailFileController } from '../controllers/send-email';

const router = Router();

router.post(`${envs.NAME_APP}/send-email`, schemaValidation(sendEmailSchema), sendEmailController);
router.post(`${envs.NAME_APP}/send-email-file`, [uploadFileMulter, schemaValidation(sendEmailSchema)], sendEmailFileController);

router.route('/')
  .post(error)
  .patch(error)
  .put(error)
  .get(error)
  .delete(error);

export default router;