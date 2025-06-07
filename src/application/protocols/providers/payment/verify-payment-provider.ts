export interface IVerifyPaymentProvider {
  verify: (paymentId: string) => Promise<IVerifyPaymentProvider.Result>;
}

export namespace IVerifyPaymentProvider {
  export type Result = {
    status: 'approved' | 'pending' | 'rejected';
    userId: string;
    courseId: string;
  };
}
