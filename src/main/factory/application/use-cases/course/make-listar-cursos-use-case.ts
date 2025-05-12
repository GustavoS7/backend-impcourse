import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { ListarCursosUseCase } from '@/application/use-cases';
import { IListarCursosUseCase } from '@/domain/use-cases';

export const makeListarCursosUseCase = (): IListarCursosUseCase => {
  return new ListarCursosUseCase(makePrismaCourseRepository());
};
