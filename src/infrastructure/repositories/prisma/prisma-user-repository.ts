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
    throw new Error('Non implemented method');
  }

  async findByEmail(email: string): Promise<IFindUserByEmailRepository.Result> {
    throw new Error('Non implemented method');
  }
}
