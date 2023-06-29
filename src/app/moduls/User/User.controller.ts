import { Request, Response } from 'express'
import UserService from './User.service'

export const CreateAUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const users = await UserService.createUser(user)
    res.status(200).json({
      massage: 'data added successfully',
      data: users,
    })
  } catch (error) {
    res.status(400).json({
      massage: 'data added failed',
      error,
    })
  }
}
