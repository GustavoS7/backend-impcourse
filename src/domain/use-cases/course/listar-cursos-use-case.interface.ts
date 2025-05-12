import { TCourseInfo } from '@/domain/models';

export interface IListarCursosUseCase {
  execute(
    data: IListarCursosUseCase.Params,
  ): Promise<IListarCursosUseCase.Result>;
}

export namespace IListarCursosUseCase {
  export type Params = {
    filter?: {
      category?: string;
      name?: string;
      price?: number[];
    };
    page?: number;
  };
  export type Result = {
    courses: TCourseInfo[];
    page: number;
    total: number;
  };
}
