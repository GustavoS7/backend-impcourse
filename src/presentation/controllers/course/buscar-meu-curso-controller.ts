import { Controller, HttpResponse } from '@/presentation/protocols';
import { IBuscarMeuCursoUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TBuscarCursoInput = {
  params: { id: string };
  user: { userId: string };
};

type TBuscarCursoOutput = IBuscarMeuCursoUseCase.Result;

export class BuscarMeuCursoController extends Controller {
  constructor(private readonly buscarMeuCursoUseCase: IBuscarMeuCursoUseCase) {
    super();
  }

  override async perform(
    httpRequest: TBuscarCursoInput,
  ): Promise<HttpResponse<TBuscarCursoOutput>> {
    const { id } = httpRequest.params;
    const { userId } = httpRequest.user;
    const response = await this.buscarMeuCursoUseCase.execute({
      id,
      userId,
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
