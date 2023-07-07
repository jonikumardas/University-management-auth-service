/* eslint-disable no-unused-expressions */
//  eslint-disable no-unused-expressions
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import ApiError from '../Error/Error';
import hendelValidationError from '../Error/HendelValidationerro';
import hendleZodError from '../Error/hendelZoderror';
import config from '../config';
import { IGenaraicErrorMassage } from '../interfaceErr/ErrorInterface';
import { Errorlogger } from '../shered/Loger';

// golobal error hendler
const GlobalErrorHenderler: ErrorRequestHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  config.env === 'development'
    ? console.log('Global error hendeler', error)
    : Errorlogger.error('Global error hendeler', error);

  let statusCode = 500;
  let message = 'somthings want wrong!';
  let errorMessages: IGenaraicErrorMassage[] = [];

  if (error?.name === 'ValidationError') {
    const Symplifederrors = hendelValidationError(error);
    (statusCode = Symplifederrors.statusCode),
      (message = Symplifederrors.message),
      (errorMessages = Symplifederrors.errorMessages);
  } else if (error instanceof ZodError) {
    const Symplifederrors = hendleZodError(error);
    (statusCode = Symplifederrors.statusCode),
      (message = Symplifederrors.message),
      (errorMessages = Symplifederrors.errorMessages);
  } else if (error instanceof ApiError) {
    (statusCode = error?.statusCode),
      (message = error?.message),
      (errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : []);
  } else if (error instanceof Error) {
    (message = error?.message),
      (errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : []);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};
export default GlobalErrorHenderler;
