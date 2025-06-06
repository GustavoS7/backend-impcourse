export interface ICreateCourseUserRepository {
  create: (
    data: ICreateCourseUserRepository.Params,
  ) => Promise<ICreateCourseUserRepository.Result>;
}

export namespace ICreateCourseUserRepository {
  export type Params = {
    userId: string;
    courseId: string;
  };
  export type Result = any;
}
