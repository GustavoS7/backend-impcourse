import { makePrismaContentRepository } from '@/main/factory/infrastructure/repositories';
import { ListarAulasCursoUseCase } from '@/application/use-cases';
import { IListarAulasCursoUseCase } from '@/domain/use-cases';

export const makeListarAulasCursoUseCase = (): IListarAulasCursoUseCase => {
  return new ListarAulasCursoUseCase(makePrismaContentRepository());
};
