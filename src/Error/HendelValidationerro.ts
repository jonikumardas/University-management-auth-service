import mongoose from 'mongoose';
import { IGenaraicErrorMassage } from '../interfaceErr/ErrorInterface';
import { IGenaricErrorResponse } from '../interfaceErr/common';
const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenaricErrorResponse => {
  const errors: IGenaraicErrorMassage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
