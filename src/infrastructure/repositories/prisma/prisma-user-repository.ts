import { RepositoryError } from '@/application/errors';
import { prisma } from '@/infrastructure/lib';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
  IGetUserByIdRepository,
} from '@/application/protocols/repositories';

export class PrismaUserRepository
  implements
    ICreateUserRepository,
    IFindUserByEmailRepository,
    IGetUserByIdRepository
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

  async get(id: string): Promise<IGetUserByIdRepository.Result> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
