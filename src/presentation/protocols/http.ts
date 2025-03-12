import { AppError } from '@/application/errors';

export type HttpResponse<T = any> = {
  statusCode: number;
  error?: {
    name: string;
    message: string;
  };
  payload?: T;
};

export const ok = <T = any>(payload: T): HttpResponse<T> => ({
  statusCode: 200,
  payload,
});

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  error: {
    message: error.message,
    name: error.name,
  },
});

export const unauthorized = (): HttpResponse<Error> => ({
  statusCode: 401,
  error: {
    message: 'Unauthorized',
    name: 'unauthorized_error',
  },
});

export const forbidden = (): HttpResponse<Error> => ({
  statusCode: 403,
  error: {
    message: 'Forbidden',
    name: 'forbidden_error',
  },
});

export const serverError = (error: unknown): HttpResponse<Error> => ({
  statusCode: 500,
  error: {
    message: error instanceof Error ? error.message : 'Internal Server Error',
    name: error instanceof Error ? error.name : 'server_error',
  },
});

export const appError = (error: AppError): HttpResponse<Error> => ({
  statusCode: error.statusCode,
  error: {
    message: error.message,
    name: error.name,
  },
});
