import cors from 'cors';
import express, { Application } from 'express';
import { UserRoutes } from './app/moduls/User/User.route';
import GlobalErrorHenderler from './midileware/GlobalErrHendeler';
const app: Application = express();
// medilewere
app.use(cors());
// perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', UserRoutes);
//  tasting
// app.get('/',async(req:Request, _res:Response,next:NextFunction) => {
//   throw new Error("testing error loger")
//   // Promise.reject((new Error("unhendel rejecttion error")))
// })
app.use(GlobalErrorHenderler);
export default app;
