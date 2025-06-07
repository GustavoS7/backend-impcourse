import { Controller, HttpResponse } from '@/presentation/protocols';
import { IBuscarAulaUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TBuscarAulaInput = {
  params: { id: string };
  user: { userId: string };
};

type TBuscarAulaOutput = IBuscarAulaUseCase.Result;

export class BuscarAulaController extends Controller {
  constructor(private readonly buscarAulaUseCase: IBuscarAulaUseCase) {
    super();
  }

  override async perform(
    httpRequest: TBuscarAulaInput,
  ): Promise<HttpResponse<TBuscarAulaOutput>> {
    const { id } = httpRequest.params;
    const { userId } = httpRequest.user;
    const response = await this.buscarAulaUseCase.execute({
      userId,
      id,
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
            required_error: 'Campo title precisa ser especificado',
            invalid_type_error: 'Campo title precisa ser especificado',
          })
          .min(1, { message: 'Campo title precisa ter pelo menos 1 caracter' }),
      }),
      user: z.object({
        userId: z
          .string({
            required_error: 'Campo title precisa ser especificado',
            invalid_type_error: 'Campo title precisa ser especificado',
          })
          .min(1, { message: 'Campo title precisa ter pelo menos 1 caracter' }),
      }),
    };
  }
}
