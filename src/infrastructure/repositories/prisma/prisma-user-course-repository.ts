import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateCourseUserRepository,
  IFetchCoursesByUserRepository,
  IFindCourseUserRepository,
} from '@/application/protocols/repositories';

export class PrismaUserCourseRepository
  implements
    IFindCourseUserRepository,
    IFetchCoursesByUserRepository,
    ICreateCourseUserRepository
{
  async find({
    courseId,
    userId,
  }: IFindCourseUserRepository.Params): Promise<IFindCourseUserRepository.Result> {
    try {
      const data = await prisma.userCourse.findFirst({
        where: {
          courseId,
          userId,
        },
        include: {
          course: {
            include: {
              content: {
                orderBy: { position: 'asc' },
              },
            },
          },
        },
        // select: {
        //   id: true,
        //   userId: true,
        //   purchasedAt: true,
        //   course: {
        //     include: {
        //       content: true,
        //     },
        //   },
        // },
      });
      return data;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async fetchByUser({
    userId,
    page = 1,
  }: IFetchCoursesByUserRepository.Params): Promise<IFetchCoursesByUserRepository.Result> {
    try {
      const [total, courses] = await Promise.all([
        prisma.userCourse.count({
          where: { userId },
        }),
        prisma.userCourse.findMany({
          where: { userId },
          take: 20,
          skip: (page - 1) * 20,
          select: {
            id: true,
            courseId: true,
            purchasedAt: true,
            course: true,
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

  async create(
    data: ICreateCourseUserRepository.Params,
  ): Promise<ICreateCourseUserRepository.Result> {
    try {
      const course = await prisma.userCourse.create({ data });
      return course;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
