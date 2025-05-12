import { TCourseInfo } from '@/domain/models';

export interface IBuscarCursoUseCase {
  execute(
    data: IBuscarCursoUseCase.Params,
  ): Promise<IBuscarCursoUseCase.Result>;
}

export namespace IBuscarCursoUseCase {
  export type Params = {
    id: string;
  };
  export type Result = TCourseInfo;
}
