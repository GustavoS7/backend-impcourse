import { makeMercadoPagoProvider } from '@/main/factory/infrastructure/providers';
import { ComprarCursoUseCase } from '@/application/use-cases';
import { IComprarCursoUseCase } from '@/domain/use-cases';
import {
  makePrismaCourseRepository,
  makePrismaUserCourseRepository,
} from '@/main/factory/infrastructure/repositories';

export const makeComprarCursoUseCase = (): IComprarCursoUseCase => {
  return new ComprarCursoUseCase(
    makePrismaCourseRepository(),
    makePrismaUserCourseRepository(),
    makeMercadoPagoProvider(),
  );
};
