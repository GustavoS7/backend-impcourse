import { TCourse } from '@/domain/models';

export interface IFetchCoursesByAuthorRepository {
  fetchByAuthor: (
    authorId: string,
  ) => Promise<IFetchCoursesByAuthorRepository.Result>;
}

export namespace IFetchCoursesByAuthorRepository {
  export type Result = TCourse[];
}
