import { IFindCourseUserRepository } from '@/application/protocols/repositories';
import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';

export class PrismaUserCourseRepository implements IFindCourseUserRepository {
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
        select: {
          id: true,
          userId: true,
          purchasedAt: true,
          course: {
            include: {
              content: true,
            },
          },
        },
      });
      return data;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
