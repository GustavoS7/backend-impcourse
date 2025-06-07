import { mercadopago } from '@/infrastructure/lib';
import { Preference } from 'mercadopago';
import {
  ICreatePaymentProvider,
  IVerifyPaymentProvider,
} from '@/application/protocols/providers';
import { RepositoryError } from '@/application/errors';

export class MercadoPagoProvider
  implements ICreatePaymentProvider, IVerifyPaymentProvider
{
  async create({
    userId,
    courseId,
    courseTitle,
    price,
  }: ICreatePaymentProvider.Params): Promise<ICreatePaymentProvider.Result> {
    try {
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: courseId,
              title: courseTitle,
              quantity: 1,
              currency_id: 'BRL',
              unit_price: price,
            },
          ],
          back_urls: {
            success: `${process.env.APP_URL}/payment/success`,
            failure: `${process.env.APP_URL}/payment/failure`,
          },

          auto_return: 'approved',
          metadata: {
            userId,
            courseId,
          },
        },
      });

      return { initPoint: preference.init_point ?? '' };
    } catch (error) {
      console.log(error);
      throw new RepositoryError();
    }
  }

  async verify(paymentId: string): Promise<IVerifyPaymentProvider.Result> {
    throw new Error();
    // const response = await fetch(
    //   `https://api.mercadopago.com/v1/payments/${paymentId}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
    //     },
    //   },
    // );

    // const payment = await response.json();
    // const { status, metadata } = payment;

    // return {
    //   status,
    //   userId: metadata.userId,
    //   courseId: metadata.courseId,
    // };
  }
}
