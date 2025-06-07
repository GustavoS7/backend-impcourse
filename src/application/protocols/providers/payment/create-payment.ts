export interface ICreatePaymentProvider {
  create: (
    data: ICreatePaymentProvider.Params,
  ) => Promise<ICreatePaymentProvider.Result>;
}

export namespace ICreatePaymentProvider {
  export type Params = {
    userId: string;
    courseId: string;
    courseTitle: string;
    price: number;
  };

  export type Result = {
    initPoint: string;
  };
}
