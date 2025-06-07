import { TContent } from '@/domain/models';

export interface IBuscarAulaUseCase {
  execute(id: IBuscarAulaUseCase.Params): Promise<IBuscarAulaUseCase.Result>;
}

export namespace IBuscarAulaUseCase {
  export type Params = {
    id: string;
    userId: string;
  };
  export type Result = TContent;
}
