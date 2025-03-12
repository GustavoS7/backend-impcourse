import { Controller, HttpResponse } from '@/presentation/protocols';
import { IRetornarUsuarioUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TRetornarUsuarioInput = {
  user: { userId: string };
};

type TRetornarUsuarioOutput = {
  id: string;
  name: string;
  email: string;
};

export class RetornarUsuarioController extends Controller {
  constructor(
    private readonly retornarUsuarioUseCase: IRetornarUsuarioUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TRetornarUsuarioInput,
  ): Promise<HttpResponse<TRetornarUsuarioOutput>> {
    const { userId } = httpRequest.user;
    const response = await this.retornarUsuarioUseCase.execute({
      userId,
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
          .min(1, { message: 'userId inválido' }),
      }),
    };
  }
}
