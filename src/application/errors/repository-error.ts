import { AppError } from './app-error';

export class RepositoryError extends AppError {
  constructor() {
    super();
    this.name = 'InternalError';
    this.statusCode = 500;
  }
}
