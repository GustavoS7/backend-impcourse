import { TCourseInfo } from '@/domain/models';

export interface IListarMeusCursosUseCase {
  execute(
    data: IListarMeusCursosUseCase.Params,
  ): Promise<IListarMeusCursosUseCase.Result>;
}

export namespace IListarMeusCursosUseCase {
  export type Params = {
    userId: string;
    page?: number;
  };
  export type Result = {
    courses: TCourseInfo[];
    page: number;
    total: number;
  };
}
