import { makePrismaUserCourseRepository } from '@/main/factory/infrastructure/repositories';
import { ComprarCursoUseCase } from '@/application/use-cases';
import { IComprarCursoUseCase } from '@/domain/use-cases';

export const makeComprarCursoUseCase = (): IComprarCursoUseCase => {
  return new ComprarCursoUseCase(makePrismaUserCourseRepository());
};
