import { IFindCourseUserRepository } from '@/application/protocols/repositories';
import { IBuscarMeuCursoUseCase } from '@/domain/use-cases';
import { NotFoundError } from '@/application/errors';

export class BuscarMeuCursoUseCase implements IBuscarMeuCursoUseCase {
  constructor(private userCourseRepository: IFindCourseUserRepository) {}

  async execute({
    id,
    userId,
  }: IBuscarMeuCursoUseCase.Params): Promise<IBuscarMeuCursoUseCase.Result> {
    const course = await this.userCourseRepository.find({
      courseId: id,
      userId,
    });
    if (!course) throw new NotFoundError();
    return course;
  }
}
