import { ICreatePaymentProvider } from '@/application/protocols/providers';
import { BadRequestError, NotFoundError } from '@/application/errors';
import { IComprarCursoUseCase } from '@/domain/use-cases';
import {
  IFindCourseUserRepository,
  IGetCourseRepository,
} from '@/application/protocols/repositories';

export class ComprarCursoUseCase implements IComprarCursoUseCase {
  constructor(
    private courseRepository: IGetCourseRepository,
    private userCourseRepository: IFindCourseUserRepository,
    private paymentProvider: ICreatePaymentProvider,
  ) {}

  async execute({
    courseId,
    userId,
  }: IComprarCursoUseCase.Params): Promise<IComprarCursoUseCase.Result> {
    const curso = await this.courseRepository.get(courseId);
    if (!curso) throw new NotFoundError('Curso não existe');
    const course = await this.userCourseRepository.find({
      courseId,
      userId,
    });
    if (course) throw new BadRequestError('Usuário já possui curso');
    const payment = await this.paymentProvider.create({
      courseId,
      courseTitle: curso.title,
      userId,
      price: curso.price.toNumber(),
    });
    return {
      initPoint: payment.initPoint,
    };
  }
}
