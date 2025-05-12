import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { BuscarCursoUseCase } from '@/application/use-cases';
import { IBuscarCursoUseCase } from '@/domain/use-cases';

export const makeBuscarCursoUseCase = (): IBuscarCursoUseCase => {
  return new BuscarCursoUseCase(makePrismaCourseRepository());
};
