import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateCourseRepository,
  IGetCoursePopulateRepository,
  IGetCourseRepository,
} from '@/application/protocols/repositories';

export class PrismaCourseRepository
  implements
    ICreateCourseRepository,
    IGetCourseRepository,
    IGetCoursePopulateRepository
{
  async create(
    data: ICreateCourseRepository.Params,
  ): Promise<ICreateCourseRepository.Result> {
    try {
      const course = await prisma.course.create({ data });
      return course;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async get(id: string): Promise<IGetCourseRepository.Result> {
    try {
      const course = await prisma.course.findUnique({
        where: {
          id,
        },
      });
      return course;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async getPopulate(id: string): Promise<IGetCoursePopulateRepository.Result> {
    try {
      const course = await prisma.course.findUnique({
        where: {
          id,
        },
        include: {
          author: true,
          content: {
            orderBy: {
              position: 'desc',
            },
          },
        },
      });
      return course;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
