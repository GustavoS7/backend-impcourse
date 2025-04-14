import { makePrismaCourseRepository } from '@/main/factory/infrastructure/repositories';
import { ListarCursosAutorUseCase } from '@/application/use-cases';
import { IListarCursosAutorUseCase } from '@/domain/use-cases';

export const makeListarCursosAutorUseCase = (): IListarCursosAutorUseCase => {
  return new ListarCursosAutorUseCase(makePrismaCourseRepository());
};
