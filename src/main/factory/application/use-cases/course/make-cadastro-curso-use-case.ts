import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { CadastroCursoUseCase } from '@/application/use-cases';
import { ICadastroCursoUseCase } from '@/domain/use-cases';

export const makeCadastroCursoUseCase = (): ICadastroCursoUseCase => {
  return new CadastroCursoUseCase(makePrismaCourseRepository());
};
