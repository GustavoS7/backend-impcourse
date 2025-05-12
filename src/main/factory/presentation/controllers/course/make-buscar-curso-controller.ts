import { makeBuscarCursoUseCase } from '@/main/factory/application/use-cases/course';
import { BuscarCursoController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeBuscarCursoController = (): Controller => {
  return new BuscarCursoController(makeBuscarCursoUseCase());
};
