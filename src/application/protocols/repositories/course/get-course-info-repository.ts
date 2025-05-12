import { TCourseInfo } from '@/domain/models';

export interface IGetCourseInfoRepository {
  getInfo: (id: string) => Promise<IGetCourseInfoRepository.Result>;
}

export namespace IGetCourseInfoRepository {
  export type Result = TCourseInfo | null;
}
