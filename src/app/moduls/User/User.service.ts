// service file sob somoy business logic hendle
import { IUser } from './User.interface'
import { User } from './User.modul'
import config from '../../../config/index'
import { genaratUserId } from './User.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // have to create a auto genarated incremantal id
  const id = await genaratUserId()
  user.id = id
  // defult password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('User creation faild ')
  }
  return createUser
}
export default {
  createUser,
}
