import { MercadoPagoProvider } from '@/infrastructure/providers/mercadopago';

export const makeMercadoPagoProvider = (): MercadoPagoProvider => {
  return new MercadoPagoProvider();
};
