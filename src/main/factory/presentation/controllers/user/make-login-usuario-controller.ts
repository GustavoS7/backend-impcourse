import { makeLoginUsuarioUseCase } from '@/main/factory/application/use-cases';
import { LoginUsuarioController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeLoginUsuarioController = (): Controller => {
  return new LoginUsuarioController(makeLoginUsuarioUseCase());
};
