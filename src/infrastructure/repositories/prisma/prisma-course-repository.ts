import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import { ICreateCourseRepository } from '@/application/protocols/repositories';

export class PrismaCourseRepository implements ICreateCourseRepository {
  async create(
    data: ICreateCourseRepository.Params,
  ): Promise<ICreateCourseRepository.Result> {
    try {
      const user = await prisma.course.create({ data });
      return user;
    } catch (error) {
      console.log(error);
      throw new RepositoryError();
    }
  }
}
