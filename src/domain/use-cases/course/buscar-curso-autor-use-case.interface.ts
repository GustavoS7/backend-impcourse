import { TCourse } from '@/domain/models';

export interface IBuscarCursoAutorUseCase {
  execute(
    data: IBuscarCursoAutorUseCase.Params,
  ): Promise<IBuscarCursoAutorUseCase.Result>;
}

export namespace IBuscarCursoAutorUseCase {
  export type Params = {
    id: string;
    userId: string;
  };
  export type Result = TCourse;
}
