import { TCoursePopulate } from '@/domain/models';

export interface IGetCoursePopulateRepository {
  getPopulate: (id: string) => Promise<IGetCoursePopulateRepository.Result>;
}

export namespace IGetCoursePopulateRepository {
  export type Result = TCoursePopulate | null;
}
