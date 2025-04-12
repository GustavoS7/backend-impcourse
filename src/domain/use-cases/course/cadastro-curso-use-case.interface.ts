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
    file: Express.Multer.File;
  };
  export type Result = TCourse;
}
