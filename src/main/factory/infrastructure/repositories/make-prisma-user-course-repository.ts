import { PrismaUserCourseRepository } from '@/infrastructure/repositories';

export const makePrismaUserCourseRepository =
  (): PrismaUserCourseRepository => {
    return new PrismaUserCourseRepository();
  };
