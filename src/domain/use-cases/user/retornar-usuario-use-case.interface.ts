export interface IRetornarUsuarioUseCase {
  execute(
    data: IRetornarUsuarioUseCase.Params,
  ): Promise<IRetornarUsuarioUseCase.Result>;
}

export namespace IRetornarUsuarioUseCase {
  export type Params = {
    userId: string;
  };
  export type Result = {
    id: string;
    name: string;
    email: string;
  };
}
