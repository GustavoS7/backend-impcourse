import { TUser } from '@/domain/models';

export interface ICreateUserRepository {
  create: (
    data: ICreateUserRepository.Params,
  ) => Promise<ICreateUserRepository.Result>;
}

export namespace ICreateUserRepository {
  export type Params = {
    name: string;
    password: string;
    email: string;
  };
  export type Result = TUser;
}
