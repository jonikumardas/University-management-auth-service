import ApiError from '../../../Error/Error';
import config from '../../../config/index';
import { IUser } from './User.interface';
import { User } from './User.modul';
import { genaratUserId } from './User.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // have to create a auto genarated incremantal id
  const id = await genaratUserId();
  user.id = id;
  // defult password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }
  const createUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'User creation faild ');
  }
  return createUser;
};
export const CreateUser = {
  createUser,
};
