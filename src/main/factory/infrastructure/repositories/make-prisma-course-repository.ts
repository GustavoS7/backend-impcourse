import { PrismaCourseRepository } from '@/infrastructure/repositories';

export const makePrismaCourseRepository = (): PrismaCourseRepository => {
  return new PrismaCourseRepository();
};
