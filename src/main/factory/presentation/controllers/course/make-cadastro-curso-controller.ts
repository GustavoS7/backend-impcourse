import { makeCadastroCursoUseCase } from '@/main/factory/application/use-cases';
import { CadastroCursoController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeCadastroCursoController = (): Controller => {
  return new CadastroCursoController(makeCadastroCursoUseCase());
};
