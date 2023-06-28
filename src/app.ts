import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
// medilewere
app.use(cors())
// perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
}),
  app.get('/user', (req: Request, res: Response) => {
    res.send('hello joni kumar das')
  })

export default app
