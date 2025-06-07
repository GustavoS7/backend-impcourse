import { Controller, HttpResponse } from '@/presentation/protocols';
import { IBuscarCursoUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TBuscarCursoInput = {
  params: { id: string };
  user?: { userId?: string };
};

type TBuscarCursoOutput = IBuscarCursoUseCase.Result;

export class BuscarCursoController extends Controller {
  constructor(private readonly buscarCursoUseCase: IBuscarCursoUseCase) {
    super();
  }

  override async perform(
    httpRequest: TBuscarCursoInput,
  ): Promise<HttpResponse<TBuscarCursoOutput>> {
    const { id } = httpRequest.params;
    const response = await this.buscarCursoUseCase.execute({
      id,
      userId: httpRequest?.user?.userId,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      params: z.object({
        id: z
          .string({
            required_error: 'Campo id precisa ser especificado',
            invalid_type_error: 'Campo id precisa ser especificado',
          })
          .min(1, { message: 'Campo id precisa ter pelo menos 1 caracter' }),
      }),
      user: z
        .object({
          userId: z.string().optional(),
        })
        .optional(),
    };
  }
}
