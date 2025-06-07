import { BuscarAulaUseCase } from '@/application/use-cases';
import { IBuscarAulaUseCase } from '@/domain/use-cases';
import {
  makePrismaContentRepository,
  makePrismaUserCourseRepository,
} from '@/main/factory/infrastructure/repositories';

export const makeBuscarAulaUseCase = (): IBuscarAulaUseCase => {
  return new BuscarAulaUseCase(
    makePrismaContentRepository(),
    makePrismaUserCourseRepository(),
  );
};
