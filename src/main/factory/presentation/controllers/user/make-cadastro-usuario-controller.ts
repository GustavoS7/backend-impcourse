import { makeCadastroUsuarioUseCase } from '@/main/factory/application/use-cases';
import { CadastroUsuarioController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeCadastroUsuarioController = (): Controller => {
  return new CadastroUsuarioController(makeCadastroUsuarioUseCase());
};
