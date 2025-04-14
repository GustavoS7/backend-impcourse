import { makeBuscarCursoAutorUseCase } from '@/main/factory/application/use-cases';
import { BuscarCursoAutorController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeBuscarCursoAutorController = (): Controller => {
  return new BuscarCursoAutorController(makeBuscarCursoAutorUseCase());
};
