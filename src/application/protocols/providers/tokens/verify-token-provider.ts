export interface IVerifyTokenProvider {
  verify: (data: IVerifyTokenProvider.Params) => IVerifyTokenProvider.Result;
}

export namespace IVerifyTokenProvider {
  export type Params = {
    token: string;
    secret: string;
  };

  export type Result = {
    userId: string;
  } | null;
}
