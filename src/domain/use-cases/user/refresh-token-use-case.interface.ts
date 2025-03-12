export interface IRefreshTokenUseCase {
  execute(
    data: IRefreshTokenUseCase.Params,
  ): Promise<IRefreshTokenUseCase.Result>;
}

export namespace IRefreshTokenUseCase {
  export type Params = {
    refreshToken: string;
  };
  export type Result = {
    accessToken: string;
    refreshToken: string;
  };
}
