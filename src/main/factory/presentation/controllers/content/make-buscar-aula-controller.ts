import { makeBuscarAulaUseCase } from '@/main/factory/application/use-cases';
import { BuscarAulaController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeBuscarAulaController = (): Controller => {
  return new BuscarAulaController(makeBuscarAulaUseCase());
};
