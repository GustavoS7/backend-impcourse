import { makePrismaUserRepository } from '@/main/factory/infrastructure/repositories';
import { CadastroUsuarioUseCase } from '@/application/use-cases';
import { ICadastroUsuarioUseCase } from '@/domain/use-cases';
import {
  makeBcryptProvider,
  makeJwtProvider,
} from '@/main/factory/infrastructure/providers';

export const makeCadastroUsuarioUseCase = (): ICadastroUsuarioUseCase => {
  return new CadastroUsuarioUseCase(
    makePrismaUserRepository(),
    makeBcryptProvider(),
    makeJwtProvider(),
  );
};
