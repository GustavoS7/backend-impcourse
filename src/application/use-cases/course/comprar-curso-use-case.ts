import { IComprarCursoUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';
import {
  IFindCourseUserRepository,
  ICreateCourseUserRepository,
} from '@/application/protocols/repositories';

export class ComprarCursoUseCase implements IComprarCursoUseCase {
  constructor(
    private userCourseRepository: IFindCourseUserRepository &
      ICreateCourseUserRepository,
  ) {}

  async execute({
    userId,
    courseId,
  }: IComprarCursoUseCase.Params): Promise<IComprarCursoUseCase.Result> {
    const course = await this.userCourseRepository.find({ userId, courseId });
    if (course) throw new BadRequestError('Curso ja comprado');
    await this.userCourseRepository.create({ userId, courseId });
    return true;
  }
}
