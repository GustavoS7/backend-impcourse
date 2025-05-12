import { makeListarCursosUseCase } from '@/main/factory/application/use-cases';
import { ListarCursosController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeListarCursosController = (): Controller => {
  return new ListarCursosController(makeListarCursosUseCase());
};
