export interface ISignTokenProvider {
  sign: (data: ISignTokenProvider.Params) => string;
}

export namespace ISignTokenProvider {
  export type Params = {
    payload: {
      [key: string]: string;
    };
    expiresIn: number;
    secret: string;
  };
}
