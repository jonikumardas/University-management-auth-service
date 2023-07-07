import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { Errorlogger, loggerSuccess } from './shered/Loger';

process.on('uncaughtException', error => {
  Errorlogger.error('uncaugth excaught error...', error);
  process.exit(1);
});
let server: Server;
async function DatabaseConnection() {
  try {
    await mongoose.connect(config.data_base_url as string);
    loggerSuccess.info('database connection successful');
    server = app.listen(config.port, () => {
      loggerSuccess.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    Errorlogger.error('data conncetion faild', error);
  }
  process.on('unhendelErrorRejuction', error => {
    // eslint-disable-next-line no-console
    Errorlogger.info('unhendel rejection has detacted...');
    if (server) {
      server.close(() => {
        Errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
DatabaseConnection();

process.on('SIGTERM', () => {
  Errorlogger.info('sigterm is receved');
  if (server) {
    server.close();
  }
});
