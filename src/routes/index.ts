import { Router } from 'express';

import { schemaValidation } from '../zod';
import { sendEmailSchema } from '../validators';

import { error } from '../controllers/error';
import { sendEmailController } from '../controllers/send-email';

const router = Router();

router.post('/send-email', schemaValidation(sendEmailSchema), sendEmailController);

router.route('/')
  .post(error)
  .patch(error)
  .put(error)
  .get(error)
  .delete(error);

export default router;