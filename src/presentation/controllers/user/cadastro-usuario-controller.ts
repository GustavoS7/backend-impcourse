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
      name: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(8),
    });
  }
}
