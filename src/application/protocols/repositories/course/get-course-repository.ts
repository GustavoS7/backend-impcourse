import { TCourse } from '@/domain/models';

export interface IGetCourseRepository {
  get: (id: string) => Promise<IGetCourseRepository.Result>;
}

export namespace IGetCourseRepository {
  export type Result = TCourse;
}
