import { PrismaContentRepository } from '@/infrastructure/repositories';

export const makePrismaContentRepository = (): PrismaContentRepository => {
  return new PrismaContentRepository();
};
