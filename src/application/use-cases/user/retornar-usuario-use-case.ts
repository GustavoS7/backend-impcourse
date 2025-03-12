import { IGetUserByIdRepository } from '@/application/protocols/repositories';
import { IRetornarUsuarioUseCase } from '@/domain/use-cases';
import { UnauthorizedError } from '@/application/errors';

export class RetornarUsuarioUseCase implements IRetornarUsuarioUseCase {
  constructor(private userRepo: IGetUserByIdRepository) {}

  async execute({
    userId,
  }: IRetornarUsuarioUseCase.Params): Promise<IRetornarUsuarioUseCase.Result> {
    const user = await this.userRepo.get(userId);
    if (!user) throw new UnauthorizedError('Invalid credentials');
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
