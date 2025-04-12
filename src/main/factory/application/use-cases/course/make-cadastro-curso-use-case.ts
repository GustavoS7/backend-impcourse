import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { makeAwsS3Provider } from '@/main/factory/infrastructure/providers';
import { CadastroCursoUseCase } from '@/application/use-cases';
import { ICadastroCursoUseCase } from '@/domain/use-cases';

export const makeCadastroCursoUseCase = (): ICadastroCursoUseCase => {
  return new CadastroCursoUseCase(
    makeAwsS3Provider(),
    makePrismaCourseRepository(),
  );
};
