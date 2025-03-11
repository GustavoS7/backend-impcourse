import { Controller, HttpResponse } from '@/presentation/protocols';
import { ICadastroUsuarioUseCase } from '@/domain/use-cases';
import { z, ZodType } from 'zod';

type TCadastroUsuarioInput = {
  body: { email: string; password: string; name: string };
};

type TCadastroUsuarioOutput = {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

export class CadastroUsuarioController extends Controller {
  constructor(
    private readonly cadastroUsuarioUseCase: ICadastroUsuarioUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TCadastroUsuarioInput,
  ): Promise<HttpResponse<TCadastroUsuarioOutput>> {
    const { email, password, name } = httpRequest.body;
    const response = await this.cadastroUsuarioUseCase.execute({
      email,
      password,
      name,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema(): ZodType<any> | null {
    return z.object({
      name: z
        .string({
          required_error: 'Campo name precisa ser especificado',
          invalid_type_error: 'Campo name precisa ser especificado',
        })
        .min(1, { message: 'Campo name precisa ter pelo menos 1 caracter' }),
      email: z
        .string({
          required_error: 'Campo name precisa ser especificado',
          invalid_type_error: 'Campo name precisa ser especificado',
        })
        .email({ message: 'email inválido' }),
      password: z
        .string({
          required_error: 'Campo name precisa ser especificado',
          invalid_type_error: 'Campo name precisa ser especificado',
        })
        .min(8, { message: 'Campo name precisa ter pelo menos 8 caracteres' }),
    });
  }
}
