export interface IFetchCoursesByUserRepository {
  fetchByUser: (
    data: IFetchCoursesByUserRepository.Params,
  ) => Promise<IFetchCoursesByUserRepository.Result>;
}

export namespace IFetchCoursesByUserRepository {
  export type Params = {
    userId: string;
    page?: number;
  };
  export type Result = any;
}
