import { makeRefreshTokenUseCase } from '@/main/factory/application/use-cases';
import { RefreshTokenController } from '@/presentation/controllers';
import { Controller } from '@/presentation/protocols';

export const makeRefreshTokenController = (): Controller => {
  return new RefreshTokenController(makeRefreshTokenUseCase());
};
