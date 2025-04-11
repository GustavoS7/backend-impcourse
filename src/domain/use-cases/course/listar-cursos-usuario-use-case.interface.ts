import { TCourse } from '@/domain/models';

export interface IListarCursosUsuarioUseCase {
  execute(
    data: IListarCursosUsuarioUseCase.Params,
  ): Promise<IListarCursosUsuarioUseCase.Result>;
}

export namespace IListarCursosUsuarioUseCase {
  export type Params = {
    userId: string;
  };
  export type Result = TCourse[];
}
