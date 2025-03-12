import { AppError } from './app-error';

export class NotFoundError extends AppError {
  constructor(message: string = 'Not Found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}
