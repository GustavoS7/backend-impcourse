import { AppError } from './app-error';

export class BadRequestError extends AppError {
  constructor(message?: string) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}
