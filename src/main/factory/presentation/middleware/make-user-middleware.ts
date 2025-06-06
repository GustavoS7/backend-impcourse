import { makeJwtProvider } from '../../infrastructure/providers';
import { UserMiddleware } from '@/presentation/middleware';
import { Middleware } from '@/presentation/protocols';

export const makeUserMiddleware = (): Middleware => {
  return new UserMiddleware(makeJwtProvider());
};
