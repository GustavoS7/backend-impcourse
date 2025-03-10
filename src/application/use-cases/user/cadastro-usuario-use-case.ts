import { ICadastroUsuarioUseCase } from '@/domain/use-cases';

export class CadastroUsuarioUseCase implements ICadastroUsuarioUseCase {
  constructor() {}

  async execute({
    email,
    name,
    senha,
  }: ICadastroUsuarioUseCase.Params): Promise<ICadastroUsuarioUseCase.Result> {
    throw new Error('Non implemented method');
  }
}
