import { makePrismaUserRepository } from '@/main/factory/infrastructure/repositories';
import { LoginUsuarioUseCase } from '@/application/use-cases';
import { ILoginUsuarioUseCase } from '@/domain/use-cases';
import {
  makeBcryptProvider,
  makeJwtProvider,
} from '@/main/factory/infrastructure/providers';

export const makeLoginUsuarioUseCase = (): ILoginUsuarioUseCase => {
  return new LoginUsuarioUseCase(
    makePrismaUserRepository(),
    makeBcryptProvider(),
    makeJwtProvider(),
  );
};
