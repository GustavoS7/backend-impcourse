import { TContent } from '@/domain/models';

export interface IListarAulasCursoUseCase {
  execute(
    data: IListarAulasCursoUseCase.Params,
  ): Promise<IListarAulasCursoUseCase.Result>;
}

export namespace IListarAulasCursoUseCase {
  export type Params = {
    courseId: string;
  };
  export type Result = TContent[];
}
