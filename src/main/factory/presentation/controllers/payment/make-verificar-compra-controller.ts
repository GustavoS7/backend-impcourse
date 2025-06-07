import { makeVerificarCompraUseCase } from '@/main/factory/application/use-cases';
import { VerificarCompraController } from '@/presentation/controllers/payment';
import { Controller } from '@/presentation/protocols';

export const makeVerificarCompraController = (): Controller => {
  return new VerificarCompraController(makeVerificarCompraUseCase());
};
