import { makeAwsS3Provider } from '@/main/factory/infrastructure/providers';
import { CadastroAulaUseCase } from '@/application/use-cases';
import { ICadastroAulaUseCase } from '@/domain/use-cases';
import {
  makePrismaContentRepository,
  makePrismaCourseRepository,
} from '@/main/factory/infrastructure/repositories';

export const makeCadastroAulaUseCase = (): ICadastroAulaUseCase => {
  return new CadastroAulaUseCase(
    makePrismaCourseRepository(),
    makeAwsS3Provider(),
    makePrismaContentRepository(),
  );
};
