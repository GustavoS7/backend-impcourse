import { TContent } from '@/domain/models';

export interface IFindContentRepository {
  find: (id: string) => Promise<IFindContentRepository.Result>;
}

export namespace IFindContentRepository {
  export type Result = TContent | null;
}
