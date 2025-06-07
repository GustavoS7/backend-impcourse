export interface IComprarCursoUseCase {
  execute(
    data: IComprarCursoUseCase.Params,
  ): Promise<IComprarCursoUseCase.Result>;
}

export namespace IComprarCursoUseCase {
  export type Params = {
    userId: string;
    courseId: string;
  };
  export type Result = { initPoint: string };
}
