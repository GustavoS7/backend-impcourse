import { Controller, HttpResponse } from '@/presentation/protocols';
import { IListarMeusCursosUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TListarMeusCursosInput = {
  body: { page?: number };
  user: { userId: string };
};

type TListarMeusCursosOutput = IListarMeusCursosUseCase.Result;

export class ListarMeusCursosController extends Controller {
  constructor(
    private readonly listarMeusCursosUseCase: IListarMeusCursosUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TListarMeusCursosInput,
  ): Promise<HttpResponse<TListarMeusCursosOutput>> {
    const { userId } = httpRequest.user;
    const { page } = httpRequest.body;
    const response = await this.listarMeusCursosUseCase.execute({
      userId,
      page,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        page: z.coerce.number().optional(),
      }),
      user: z.object({
        userId: z.string(),
      }),
    };
  }
}
