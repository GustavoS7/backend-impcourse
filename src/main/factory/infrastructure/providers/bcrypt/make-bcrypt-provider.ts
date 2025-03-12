import { BcryptProvider } from '@/infrastructure/providers';

export const makeBcryptProvider = (): BcryptProvider => {
  return new BcryptProvider(12);
};
