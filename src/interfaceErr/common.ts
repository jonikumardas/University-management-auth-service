import { IGenaraicErrorMassage } from './ErrorInterface';
export type IGenaricErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenaraicErrorMassage[];
};
