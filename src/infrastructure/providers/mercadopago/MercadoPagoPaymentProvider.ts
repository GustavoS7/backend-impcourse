import { RepositoryError } from '@/application/errors';
import { mercadopago } from '@/infrastructure/lib';
import { Preference } from 'mercadopago';
import {
  ICreatePaymentProvider,
  IVerifyPaymentProvider,
} from '@/application/protocols/providers';

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
            success: `/user/curso/${courseId}`,
            failure: `/curso/${courseId}`,
          },
          notification_url:
            'https://fdde-200-168-219-210.ngrok-free.app/webhook',
          metadata: {
            userId,
            courseId,
          },
        },
      });

      return { initPoint: preference.init_point ?? '' };
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async verify(paymentId: string): Promise<IVerifyPaymentProvider.Result> {
    try {
      const response = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer TEST-8448188439852596-060621-5eef026977af8c6cf654a4aeff203743-1067020725`,
          },
        },
      );

      const payment = await response.json();
      const { status, metadata } = payment;

      return {
        status,
        userId: metadata.user_id,
        courseId: metadata.course_id,
      };
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
