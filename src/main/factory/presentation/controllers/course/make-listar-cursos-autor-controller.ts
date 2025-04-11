import { makeListarCursosAutorUseCase } from '@/main/factory/application/use-cases';
import { ListarCursosAutorController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeListarCursosAutorController = (): Controller => {
  return new ListarCursosAutorController(makeListarCursosAutorUseCase());
};
