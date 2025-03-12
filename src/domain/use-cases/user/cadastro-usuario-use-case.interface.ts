export interface ICadastroUsuarioUseCase {
  execute(
    data: ICadastroUsuarioUseCase.Params,
  ): Promise<ICadastroUsuarioUseCase.Result>;
}

export namespace ICadastroUsuarioUseCase {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
  export type Result = {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
}
