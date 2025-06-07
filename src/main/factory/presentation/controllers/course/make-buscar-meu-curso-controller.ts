import { makeBuscarMeuCursoUseCase } from '@/main/factory/application/use-cases/course';
import { BuscarMeuCursoController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeBuscarMeuCursoController = (): Controller => {
  return new BuscarMeuCursoController(makeBuscarMeuCursoUseCase());
};
