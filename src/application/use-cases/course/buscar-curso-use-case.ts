import { IGetCourseInfoRepository } from '@/application/protocols/repositories';
import { IBuscarCursoUseCase } from '@/domain/use-cases';
import { NotFoundError } from '@/application/errors';

export class BuscarCursoUseCase implements IBuscarCursoUseCase {
  constructor(private courseRepository: IGetCourseInfoRepository) {}

  async execute({
    id,
  }: IBuscarCursoUseCase.Params): Promise<IBuscarCursoUseCase.Result> {
    const course = await this.courseRepository.getInfo(id);
    if (!course) throw new NotFoundError('Curso não encontrado');
    return course;
  }
}
