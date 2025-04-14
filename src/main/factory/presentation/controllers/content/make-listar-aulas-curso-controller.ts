import { makeListarAulasCursoUseCase } from '@/main/factory/application/use-cases';
import { ListarAulasCursoController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeListarAulasCursoController = (): Controller => {
  return new ListarAulasCursoController(makeListarAulasCursoUseCase());
};
