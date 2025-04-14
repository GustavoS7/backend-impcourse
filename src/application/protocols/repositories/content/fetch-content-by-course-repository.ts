import { TContent } from '@/domain/models';

export interface IFetchContentByCourseRepository {
  fetchByCourse: (
    courseId: string,
  ) => Promise<IFetchContentByCourseRepository.Result>;
}

export namespace IFetchContentByCourseRepository {
  export type Result = TContent[];
}
