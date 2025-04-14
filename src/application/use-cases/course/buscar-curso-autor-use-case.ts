import { IGetCourseRepository } from '@/application/protocols/repositories';
import { IBuscarCursoAutorUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';

export class BuscarCursoAutorUseCase implements IBuscarCursoAutorUseCase {
  constructor(private courseRepository: IGetCourseRepository) {}

  async execute({
    id,
    userId,
  }: IBuscarCursoAutorUseCase.Params): Promise<IBuscarCursoAutorUseCase.Result> {
    const course = await this.courseRepository.get(id);
    if (!course || course.authorId !== userId)
      throw new BadRequestError('Curso não encontrado');
    return course;
  }
}
