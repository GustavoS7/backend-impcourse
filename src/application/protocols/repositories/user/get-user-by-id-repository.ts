import { TUser } from '@/domain/models';

export interface IGetUserByIdRepository {
  get: (id: string) => Promise<IGetUserByIdRepository.Result>;
}

export namespace IGetUserByIdRepository {
  export type Result = TUser | null;
}
