import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
// to beutify console
const { combine, timestamp, label, printf, prettyPrint } = format;

const myformat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toString()}: ${hour}:${minute}:${seconds} [${label}] ${level}: ${message}`;
});
const loggerSuccess = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow! success' }),
    timestamp(),
    myformat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'U.M.S-%DATE-success.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
const Errorlogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'wrong meow! error' }),
    timestamp(),
    myformat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'U.M.S-%DATE-error.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
export { Errorlogger, loggerSuccess };
