import { Controller, HttpResponse } from '@/presentation/protocols';
import { IListarCursosUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TListarCursosInput = {
  body: {
    filter?: {
      title?: string;
      category?: string;
    };
    page?: number;
  };
};

type TListarCursosOutput = IListarCursosUseCase.Result;

export class ListarCursosController extends Controller {
  constructor(private readonly listarCursoUseCase: IListarCursosUseCase) {
    super();
  }

  override async perform(
    httpRequest: TListarCursosInput,
  ): Promise<HttpResponse<TListarCursosOutput>> {
    const { filter, page } = httpRequest.body;
    const response = await this.listarCursoUseCase.execute({
      filter,
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
        filter: z
          .object({
            title: z
              .string({
                invalid_type_error: 'Campo title precisa ser string',
              })
              .optional(),
            category: z
              .string({
                invalid_type_error: 'Campo category precisa ser string',
              })
              .optional(),
          })
          .optional(),
        page: z.coerce.number().optional(),
      }),
    };
  }
}
