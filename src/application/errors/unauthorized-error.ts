import { AppError } from './app-error';

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message);
    this.name = 'Unauthorized';
    this.statusCode = 401;
  }
}
