import { IBuscarCursoUseCase } from '@/domain/use-cases';
import { NotFoundError } from '@/application/errors';
import {
  IFindCourseUserRepository,
  IGetCourseInfoRepository,
} from '@/application/protocols/repositories';

export class BuscarCursoUseCase implements IBuscarCursoUseCase {
  constructor(
    private courseRepository: IGetCourseInfoRepository,
    private userCourseRepository: IFindCourseUserRepository,
  ) {}

  async execute({
    id,
    userId,
  }: IBuscarCursoUseCase.Params): Promise<IBuscarCursoUseCase.Result> {
    const course = await this.courseRepository.getInfo(id);
    if (!course) throw new NotFoundError('Curso não encontrado');
    let hasUserPurchased = false;
    if (userId) {
      const data = await this.userCourseRepository.find({
        courseId: id,
        userId,
      });
      hasUserPurchased = data ? true : false;
    }
    return { course, hasUserPurchased };
  }
}
