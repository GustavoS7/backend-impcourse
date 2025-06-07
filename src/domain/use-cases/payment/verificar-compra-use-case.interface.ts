export interface IVerificarCompraUseCase {
  execute(
    data: IVerificarCompraUseCase.Params,
  ): Promise<IVerificarCompraUseCase.Result>;
}

export namespace IVerificarCompraUseCase {
  export type Params = {
    type: string;
    data: {
      id: string;
    };
  };
  export type Result = boolean;
}
