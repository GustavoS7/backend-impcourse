import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateCourseRepository,
  IFetchCoursesByAuthorRepository,
  IFetchCoursesRepository,
  IGetCourseInfoRepository,
  IGetCoursePopulateRepository,
  IGetCourseRepository,
} from '@/application/protocols/repositories';

export class PrismaCourseRepository
  implements
    ICreateCourseRepository,
    IGetCourseRepository,
    IGetCoursePopulateRepository,
    IFetchCoursesByAuthorRepository,
    IFetchCoursesRepository,
    IGetCourseInfoRepository
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

  async getInfo(id: string): Promise<IGetCourseInfoRepository.Result> {
    try {
      const course = await prisma.course.findUnique({
        where: {
          id,
        },
        select: {
          cover: true,
          category: true,
          description: true,
          title: true,
          price: true,
          id: true,
          content: {
            select: {
              title: true,
              description: true,
              type: true,
              position: true,
            },
          },
          author: {
            select: {
              name: true,
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

  async fetch({
    filter = {},
    page = 1,
  }: IFetchCoursesRepository.Params): Promise<IFetchCoursesRepository.Result> {
    try {
      const [total, courses] = await Promise.all([
        prisma.course.count({
          where: filter,
        }),
        prisma.course.findMany({
          where: filter,
          take: 20,
          skip: (page - 1) * 20,
          select: {
            cover: true,
            category: true,
            description: true,
            title: true,
            price: true,
            id: true,
            content: {
              select: {
                title: true,
                description: true,
                type: true,
                position: true,
              },
            },
            author: {
              select: {
                name: true,
              },
            },
          },
        }),
      ]);
      return {
        courses,
        total,
        page,
      };
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
