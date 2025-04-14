import { Controller, HttpResponse } from '@/presentation/protocols';
import { IListarCursosAutorUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TListarCursosAutorInput = {
  user: { userId: string };
};

type TListarCursosAutorOutput = IListarCursosAutorUseCase.Result;

export class ListarCursosAutorController extends Controller {
  constructor(
    private readonly listarCursoUsuarioUseCase: IListarCursosAutorUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TListarCursosAutorInput,
  ): Promise<HttpResponse<TListarCursosAutorOutput>> {
    const { userId } = httpRequest.user;
    const response = await this.listarCursoUsuarioUseCase.execute({
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
          .min(1, {
            message: 'Campo userId precisa ter pelo menos 1 caracter',
          }),
      }),
    };
  }
}
