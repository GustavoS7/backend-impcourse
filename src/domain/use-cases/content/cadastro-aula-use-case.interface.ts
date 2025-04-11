import { TContent } from '@/domain/models';

export interface ICadastroAulaUseCase {
  execute(
    data: ICadastroAulaUseCase.Params,
  ): Promise<ICadastroAulaUseCase.Result>;
}

export namespace ICadastroAulaUseCase {
  export type Params = {
    title: string;
    description: string;
    file: Express.Multer.File;
    userId: string;
    courseId: string;
  };
  export type Result = TContent;
}
