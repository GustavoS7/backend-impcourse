import { Controller, HttpResponse } from '@/presentation/protocols';
import { IBuscarCursoAutorUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TBuscarCursoAutorInput = {
  params: { id: string };
  user: { userId: string };
};

type TBuscarCursoAutorOutput = IBuscarCursoAutorUseCase.Result;

export class BuscarCursoAutorController extends Controller {
  constructor(
    private readonly buscarCursoAutorUseCase: IBuscarCursoAutorUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TBuscarCursoAutorInput,
  ): Promise<HttpResponse<TBuscarCursoAutorOutput>> {
    const { userId } = httpRequest.user;
    const { id } = httpRequest.params;
    const response = await this.buscarCursoAutorUseCase.execute({
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
          .min(1, { message: 'Campo id precisa ter pelo menos 1 caracter' }),
      }),
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
    };
  }
}
