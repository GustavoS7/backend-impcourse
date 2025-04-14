import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { BuscarCursoAutorUseCase } from '@/application/use-cases';
import { IBuscarCursoAutorUseCase } from '@/domain/use-cases';

export const makeBuscarCursoAutorUseCase = (): IBuscarCursoAutorUseCase => {
  return new BuscarCursoAutorUseCase(makePrismaCourseRepository());
};
