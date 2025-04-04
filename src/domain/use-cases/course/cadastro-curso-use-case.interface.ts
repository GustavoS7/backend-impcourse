import { TCourse } from '@/domain/models';

export interface ICadastroCursoUseCase {
  execute(
    data: ICadastroCursoUseCase.Params,
  ): Promise<ICadastroCursoUseCase.Result>;
}

export namespace ICadastroCursoUseCase {
  export type Params = {
    title: string;
    description: string;
    category: string;
    price: number;
    userId: string;
  };
  export type Result = TCourse;
}
