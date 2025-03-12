import { PrismaUserRepository } from '@/infrastructure/repositories';

export const makePrismaUserRepository = (): PrismaUserRepository => {
  return new PrismaUserRepository();
};
