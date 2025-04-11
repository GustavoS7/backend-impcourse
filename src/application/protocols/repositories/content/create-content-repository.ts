import { TContent } from '@/domain/models';

export interface ICreateContentRepository {
  create: (
    data: ICreateContentRepository.Params,
  ) => Promise<ICreateContentRepository.Result>;
}

export namespace ICreateContentRepository {
  export type Params = {
    title: string;
    description: string;
    url: string;
    type: string;
    position: number;
    courseId: string;
  };
  export type Result = TContent;
}
