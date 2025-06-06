export interface IComprarCursoUseCase {
  execute(
    data: IComprarCursoUseCase.Params,
  ): Promise<IComprarCursoUseCase.Result>;
}

export namespace IComprarCursoUseCase {
  export type Params = {
    courseId: string;
    userId: string;
  };
  export type Result = boolean;
}
