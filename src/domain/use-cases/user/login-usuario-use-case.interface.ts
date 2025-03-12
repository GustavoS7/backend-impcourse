export interface ILoginUsuarioUseCase {
  execute(
    data: ILoginUsuarioUseCase.Params,
  ): Promise<ILoginUsuarioUseCase.Result>;
}

export namespace ILoginUsuarioUseCase {
  export type Params = {
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
