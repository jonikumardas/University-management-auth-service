import { ZodError, ZodIssue } from 'zod';
import { IGenaraicErrorMassage } from '../interfaceErr/ErrorInterface';
import { IGenaricErrorResponse } from '../interfaceErr/common';
const hendleZodError = (error: ZodError): IGenaricErrorResponse => {
  const errors: IGenaraicErrorMassage[] = error.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod Validation error ',
    errorMessages: errors,
  };
};
export default hendleZodError;
