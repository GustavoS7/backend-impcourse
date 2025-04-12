import { TCourse } from '@/domain/models';

export interface ICreateCourseRepository {
  create: (
    data: ICreateCourseRepository.Params,
  ) => Promise<ICreateCourseRepository.Result>;
}

export namespace ICreateCourseRepository {
  export type Params = {
    title: string;
    authorId: string;
    description: string;
    category: string;
    price: number;
    cover?: string | null;
  };
  export type Result = TCourse;
}
