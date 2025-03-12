import { Controller, HttpResponse } from '@/presentation/protocols';
import { ILoginUsuarioUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type ILoginUsuarioInput = {
  body: { email: string; password: string; name: string };
};

type ILoginUsuarioOutput = {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

export class LoginUsuarioController extends Controller {
  constructor(private readonly loginUsuarioUseCase: ILoginUsuarioUseCase) {
    super();
  }

  override async perform(
    httpRequest: ILoginUsuarioInput,
  ): Promise<HttpResponse<ILoginUsuarioOutput>> {
    const { email, password } = httpRequest.body;
    const response = await this.loginUsuarioUseCase.execute({
      email,
      password,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        email: z
          .string({
            required_error: 'Campo email precisa ser especificado',
            invalid_type_error: 'Campo email precisa ser especificado',
          })
          .email({ message: 'email inválido' }),
        password: z
          .string({
            required_error: 'Campo password precisa ser especificado',
            invalid_type_error: 'Campo password precisa ser especificado',
          })
          .min(1, {
            message: 'Campo password precisa ter pelo menos 1 caracter',
          }),
      }),
    };
  }
}
