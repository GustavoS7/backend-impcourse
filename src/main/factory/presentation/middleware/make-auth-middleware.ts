import { makeJwtProvider } from '../../infrastructure/providers';
import { AuthMiddleware } from '@/presentation/middleware';
import { Middleware } from '@/presentation/protocols';

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeJwtProvider());
};
