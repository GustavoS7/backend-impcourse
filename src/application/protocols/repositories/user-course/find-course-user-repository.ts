import { TUser } from '@/domain/models';

export interface IFindCourseUserRepository {
  find: (
    data: IFindCourseUserRepository.Params,
  ) => Promise<IFindCourseUserRepository.Result>;
}

export namespace IFindCourseUserRepository {
  export type Params = {
    userId: string;
    courseId: string;
  };
  export type Result = any;
}
