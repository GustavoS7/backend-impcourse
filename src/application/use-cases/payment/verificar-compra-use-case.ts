import { ICreateCourseUserRepository } from '@/application/protocols/repositories';
import { IVerifyPaymentProvider } from '@/application/protocols/providers';
import { IVerificarCompraUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';

export class VerificarCompraUseCase implements IVerificarCompraUseCase {
  constructor(
    private paymentProvider: IVerifyPaymentProvider,
    private userCourseRepository: ICreateCourseUserRepository,
  ) {}

  async execute({
    type,
    data,
  }: IVerificarCompraUseCase.Params): Promise<IVerificarCompraUseCase.Result> {
    if (type !== 'payment') throw new BadRequestError();
    const payment = await this.paymentProvider.verify(data.id);
    if (payment.status !== 'approved') throw new BadRequestError();
    const userId = payment.userId;
    const courseId = payment.courseId;
    if (!userId || !courseId) throw new BadRequestError();
    await this.userCourseRepository.create({
      courseId,
      userId,
    });
    return true;
  }
}
