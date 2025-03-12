import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/application/protocols/repositories';

export class PrismaUserRepository
  implements ICreateUserRepository, IFindUserByEmailRepository
{
  async create(
    data: ICreateUserRepository.Params,
  ): Promise<ICreateUserRepository.Result> {
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async findByEmail(email: string): Promise<IFindUserByEmailRepository.Result> {
    try {
      const user = await prisma.user.findFirst({
        where: { email },
      });
      return user;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
