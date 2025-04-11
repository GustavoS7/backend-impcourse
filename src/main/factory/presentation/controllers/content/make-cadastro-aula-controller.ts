import { makeCadastroAulaUseCase } from '@/main/factory/application/use-cases';
import { CadastroAulaController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeCadastroAulaController = (): Controller => {
  return new CadastroAulaController(makeCadastroAulaUseCase());
};
