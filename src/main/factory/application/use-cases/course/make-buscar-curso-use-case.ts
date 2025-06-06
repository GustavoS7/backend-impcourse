import { BuscarCursoUseCase } from '@/application/use-cases';
import { IBuscarCursoUseCase } from '@/domain/use-cases';
import {
  makePrismaCourseRepository,
  makePrismaUserCourseRepository,
} from '@/main/factory/infrastructure/repositories';

export const makeBuscarCursoUseCase = (): IBuscarCursoUseCase => {
  return new BuscarCursoUseCase(
    makePrismaCourseRepository(),
    makePrismaUserCourseRepository(),
  );
};
