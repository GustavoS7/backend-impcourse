import { TCourse } from '@/domain/models';

export interface IListarCursosAutorUseCase {
  execute(
    data: IListarCursosAutorUseCase.Params,
  ): Promise<IListarCursosAutorUseCase.Result>;
}

export namespace IListarCursosAutorUseCase {
  export type Params = {
    userId: string;
  };
  export type Result = TCourse[];
}
