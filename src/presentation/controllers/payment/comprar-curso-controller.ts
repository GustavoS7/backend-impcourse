import { Controller, HttpResponse } from '@/presentation/protocols';
import { IComprarCursoUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TComprarCursoInput = {
  body: { courseId: string };
  user: { userId: string };
};

type TComprarCursoOutput = IComprarCursoUseCase.Result;

export class ComprarCursoController extends Controller {
  constructor(private readonly comprarCursoUseCase: IComprarCursoUseCase) {
    super();
  }

  override async perform(
    httpRequest: TComprarCursoInput,
  ): Promise<HttpResponse<TComprarCursoOutput>> {
    const { courseId } = httpRequest.body;
    const { userId } = httpRequest.user;
    const response = await this.comprarCursoUseCase.execute({
      courseId,
      userId,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        courseId: z
          .string({
            required_error: 'Campo id precisa ser especificado',
            invalid_type_error: 'Campo id precisa ser especificado',
          })
          .min(1, { message: 'Campo id precisa ter pelo menos 1 caractere' }),
      }),
      user: z.object({
        userId: z
          .string({
            required_error: 'Campo userId precisa ser especificado',
            invalid_type_error: 'Campo userId precisa ser especificado',
          })
          .min(1, {
            message: 'Campo userId precisa ter pelo menos 1 caractere',
          }),
      }),
    };
  }
}
