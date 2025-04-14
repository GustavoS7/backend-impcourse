import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateContentRepository,
  IFetchContentByCourseRepository,
} from '@/application/protocols/repositories';

export class PrismaContentRepository
  implements ICreateContentRepository, IFetchContentByCourseRepository
{
  async create(
    data: ICreateContentRepository.Params,
  ): Promise<ICreateContentRepository.Result> {
    try {
      const content = await prisma.content.create({ data });
      return content;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async fetchByCourse(
    courseId: string,
  ): Promise<IFetchContentByCourseRepository.Result> {
    try {
      const content = await prisma.content.findMany({
        where: { courseId },
      });
      return content;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
