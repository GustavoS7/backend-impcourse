import { TCourse, TCourseInfo } from '@/domain/models';

export interface IFetchCoursesRepository {
  fetch: (
    data: IFetchCoursesRepository.Params,
  ) => Promise<IFetchCoursesRepository.Result>;
}

export namespace IFetchCoursesRepository {
  export type Params = {
    filter?: {
      title?: string;
      // price?: number[];
      category?: string;
    };
    page?: number;
  };

  export type Result = {
    courses: TCourseInfo[];
    page: number;
    total: number;
  };
}
