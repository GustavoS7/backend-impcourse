import { TCourseInfo } from '@/domain/models';

export interface IBuscarCursoUseCase {
  execute(
    data: IBuscarCursoUseCase.Params,
  ): Promise<IBuscarCursoUseCase.Result>;
}

export namespace IBuscarCursoUseCase {
  export type Params = {
    id: string;
    userId?: string;
  };
  export type Result = {
    course: TCourseInfo;
    hasUserPurchased: boolean;
  };
}
