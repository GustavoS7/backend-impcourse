import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateCourseRepository,
  IFetchCoursesByAuthorRepository,
  IGetCoursePopulateRepository,
  IGetCourseRepository,
} from '@/application/protocols/repositories';

export class PrismaCourseRepository
  implements
    ICreateCourseRepository,
    IGetCourseRepository,
    IGetCoursePopulateRepository,
    IFetchCoursesByAuthorRepository
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

  async fetchByAuthor(
    authorId: string,
  ): Promise<IFetchCoursesByAuthorRepository.Result> {
    try {
      const courses = await prisma.course.findMany({
        where: {
          authorId,
        },
      });
      return courses;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
