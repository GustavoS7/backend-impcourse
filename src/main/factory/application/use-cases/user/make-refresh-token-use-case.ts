import { makePrismaUserRepository } from '@/main/factory/infrastructure/repositories';
import { makeJwtProvider } from '@/main/factory/infrastructure/providers';
import { RefreshTokenUseCase } from '@/application/use-cases';
import { IRefreshTokenUseCase } from '@/domain/use-cases';

export const makeRefreshTokenUseCase = (): IRefreshTokenUseCase => {
  return new RefreshTokenUseCase(makeJwtProvider(), makePrismaUserRepository());
};
