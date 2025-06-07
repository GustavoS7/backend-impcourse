import { makePrismaUserCourseRepository } from '@/main/factory/infrastructure/repositories';
import { ListarMeusCursosUseCase } from '@/application/use-cases';
import { IListarMeusCursosUseCase } from '@/domain/use-cases';

export const makeListarMeusCursosUseCase = (): IListarMeusCursosUseCase => {
  return new ListarMeusCursosUseCase(makePrismaUserCourseRepository());
};
