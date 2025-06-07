import { makePrismaUserCourseRepository } from '@/main/factory/infrastructure/repositories';
import { makeMercadoPagoProvider } from '@/main/factory/infrastructure/providers';
import { VerificarCompraUseCase } from '@/application/use-cases';
import { IVerificarCompraUseCase } from '@/domain/use-cases';

export const makeVerificarCompraUseCase = (): IVerificarCompraUseCase => {
  return new VerificarCompraUseCase(
    makeMercadoPagoProvider(),
    makePrismaUserCourseRepository(),
  );
};
