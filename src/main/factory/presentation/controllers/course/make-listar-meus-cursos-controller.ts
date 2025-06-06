import { makeListarMeusCursosUseCase } from '@/main/factory/application/use-cases';
import { ListarMeusCursosController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeListarMeusCursosController = (): Controller => {
  return new ListarMeusCursosController(makeListarMeusCursosUseCase());
};
