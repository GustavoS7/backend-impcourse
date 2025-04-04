import { ICreateCourseRepository } from '@/application/protocols/repositories';
import { ICadastroCursoUseCase } from '@/domain/use-cases';

export class CadastroCursoUseCase implements ICadastroCursoUseCase {
  constructor(private courseRepository: ICreateCourseRepository) {}

  async execute({
    category,
    description,
    price,
    title,
    userId,
  }: ICadastroCursoUseCase.Params): Promise<ICadastroCursoUseCase.Result> {
    const course = await this.courseRepository.create({
      authorId: userId,
      category,
      description,
      price,
      title,
    });
    return course;
  }
}
