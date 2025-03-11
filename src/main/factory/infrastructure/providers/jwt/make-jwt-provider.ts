import { JwtProvider } from '@/infrastructure/providers';

export const makeJwtProvider = (): JwtProvider => {
  return new JwtProvider();
};
