export interface IBuscarMeuCursoUseCase {
  execute(
    data: IBuscarMeuCursoUseCase.Params,
  ): Promise<IBuscarMeuCursoUseCase.Result>;
}

export namespace IBuscarMeuCursoUseCase {
  export type Params = {
    id: string;
    userId: string;
  };
  export type Result = any;
}
