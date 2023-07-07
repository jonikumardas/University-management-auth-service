import { RequestHandler } from 'express';
import { CreateUser } from './User.service';

const CreateAUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const users = await CreateUser.createUser(user);
    res.status(200).json({
      massage: 'data added successfully',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
export const UserControler = {
  CreateAUser,
};
