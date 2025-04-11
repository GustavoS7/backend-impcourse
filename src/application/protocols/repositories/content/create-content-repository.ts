import { TCourse } from '@/domain/models';

export interface ICreateContentRepository {
  create: (
    data: ICreateContentRepository.Params,
  ) => Promise<ICreateContentRepository.Result>;
}

export namespace ICreateContentRepository {
  export type Params = {
    title: string;
    authorId: string;
    description: string;
    category: string;
    price: number;
  };
  export type Result = TCourse;
}
