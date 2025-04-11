import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import { ICreateContentRepository } from '@/application/protocols/repositories';

export class PrismaContentRepository implements ICreateContentRepository {
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
}
