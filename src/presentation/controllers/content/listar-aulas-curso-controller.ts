import { Controller, HttpResponse } from '@/presentation/protocols';
import { IListarAulasCursoUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TListarAulasCursoInput = {
  params: { courseId: string };
};

type TListarAulasCursoOutput = IListarAulasCursoUseCase.Result;

export class ListarAulasCursoController extends Controller {
  constructor(
    private readonly listarAulasCursoUseCase: IListarAulasCursoUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TListarAulasCursoInput,
  ): Promise<HttpResponse<TListarAulasCursoOutput>> {
    const { courseId } = httpRequest.params;
    const response = await this.listarAulasCursoUseCase.execute({
      courseId,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      params: z.object({
        courseId: z
          .string({
            required_error: 'Campo description precisa ser especificado',
            invalid_type_error: 'Campo description precisa ser especificado',
          })
          .min(1, {
            message: 'Campo description precisa ter pelo menos 1 caracter',
          }),
      }),
    };
  }
}
