import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })
export default {
  port: process.env.PORT,
  data_base_url: process.env.MONGODB_URL,
  default_user_password: process.env.DEFULT_USER_PASS,
}
