import { makeRetornarUsuarioUseCase } from '@/main/factory/application/use-cases';
import { RetornarUsuarioController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeRetornarUsuarioController = (): Controller => {
  return new RetornarUsuarioController(makeRetornarUsuarioUseCase());
};
