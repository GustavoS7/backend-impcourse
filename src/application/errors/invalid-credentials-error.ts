import { AppError } from './app-error';

export class InvalidCredentialsError extends AppError {
  constructor(message: string = 'Invalid Credentials (E-mail)') {
    super(message);
    this.name = 'InvalidCredentials';
    this.statusCode = 401;
  }
}
