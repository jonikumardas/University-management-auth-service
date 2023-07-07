import express from 'express';
import validateRequst from '../../../midileware/Validate.requst';
import { UserControler } from './User.controller';
import { UserValidation } from './user/User.validation';
const router = express.Router();
router.post(
  '/create-user',
  validateRequst(UserValidation.createUserZodSchema),
  UserControler.CreateAUser
);
export const UserRoutes = router;
