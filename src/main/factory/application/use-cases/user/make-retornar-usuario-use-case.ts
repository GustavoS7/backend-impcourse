import { makePrismaUserRepository } from '@/main/factory/infrastructure/repositories';
import { RetornarUsuarioUseCase } from '@/application/use-cases';
import { IRetornarUsuarioUseCase } from '@/domain/use-cases';

export const makeRetornarUsuarioUseCase = (): IRetornarUsuarioUseCase => {
  return new RetornarUsuarioUseCase(makePrismaUserRepository());
};
