import { makeComprarCursoUseCase } from '@/main/factory/application/use-cases';
import { ComprarCursoController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeComprarCursoController = (): Controller => {
  return new ComprarCursoController(makeComprarCursoUseCase());
};
