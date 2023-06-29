import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/moduls/User/User.route'
const app: Application = express()
// medilewere
app.use(cors())
// perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
}),
  app.use('/api/v1/', router)

export default app
