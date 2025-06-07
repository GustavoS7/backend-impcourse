import { Controller, HttpResponse } from '@/presentation/protocols';
import { IComprarCursoUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TComprarCursoInput = {
  user: { userId: string };
  body: { courseId: string };
};

type TComprarCursoOutput = IComprarCursoUseCase.Result;

export class ComprarCursoController extends Controller {
  constructor(
    private readonly listarCursoUsuarioUseCase: IComprarCursoUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TComprarCursoInput,
  ): Promise<HttpResponse<TComprarCursoOutput>> {
    const { userId } = httpRequest.user;
    const { courseId } = httpRequest.body;
    const response = await this.listarCursoUsuarioUseCase.execute({
      userId,
      courseId,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      user: z.object({
        userId: z
          .string({
            required_error: 'Campo userId precisa ser especificado',
            invalid_type_error: 'Campo userId precisa ser especificado',
          })
          .min(1, {
            message: 'Campo userId precisa ter pelo menos 1 caracter',
          }),
      }),
      body: z.object({
        courseId: z
          .string({
            required_error: 'Campo courseId precisa ser especificado',
            invalid_type_error: 'Campo courseId precisa ser especificado',
          })
          .min(1, {
            message: 'Campo courseId precisa ter pelo menos 1 caracter',
          }),
      }),
    };
  }
}
