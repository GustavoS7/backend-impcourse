import { makePrismaUserCourseRepository } from '@/main/factory/infrastructure/repositories';
import { BuscarMeuCursoUseCase } from '@/application/use-cases';
import { IBuscarMeuCursoUseCase } from '@/domain/use-cases';

export const makeBuscarMeuCursoUseCase = (): IBuscarMeuCursoUseCase => {
  return new BuscarMeuCursoUseCase(makePrismaUserCourseRepository());
};
