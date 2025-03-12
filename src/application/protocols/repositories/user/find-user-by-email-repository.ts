import { TUser } from '@/domain/models';

export interface IFindUserByEmailRepository {
  findByEmail: (email: string) => Promise<IFindUserByEmailRepository.Result>;
}

export namespace IFindUserByEmailRepository {
  export type Result = TUser | null;
}
