import { ICadastroCursoUseCase } from '@/domain/use-cases';

export class CadastroCursoUseCase implements ICadastroCursoUseCase {
  constructor() {}

  async execute({
    category,
    description,
    price,
    title,
    userId,
  }: ICadastroCursoUseCase.Params): Promise<ICadastroCursoUseCase.Result> {
    throw new Error('Non implemented Method');
  }
}
