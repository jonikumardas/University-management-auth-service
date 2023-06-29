import { User } from './User.modul'

export const findLastUserFromBb = async () => {
  const findLastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return findLastUser?.id
}
export const genaratUserId = async () => {
  const getuserId =
    (await findLastUserFromBb()) || (0).toString().padStart(5, '0')
  const currentid = (parseInt(getuserId) + 1).toString().padStart(5, '0')

  return currentid
}
