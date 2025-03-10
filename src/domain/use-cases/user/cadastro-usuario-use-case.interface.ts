import { TUser } from '@/domain/models';

export interface ICadastroUsuarioUseCase {
  execute(
    data: ICadastroUsuarioUseCase.Params,
  ): Promise<ICadastroUsuarioUseCase.Result>;
}

export namespace ICadastroUsuarioUseCase {
  export type Params = {
    name: string;
    email: string;
    senha: string;
  };
  export type Result = TUser;
}
