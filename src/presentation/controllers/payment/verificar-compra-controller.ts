import { Controller, HttpResponse } from '@/presentation/protocols';
import { IVerificarCompraUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TVerificarCompraInput = {
  body: {
    type: string;
    data: { id: string };
  };
};

type TVerificarCompraOutpur = IVerificarCompraUseCase.Result;

export class VerificarCompraController extends Controller {
  constructor(
    private readonly verificarCompraUseCase: IVerificarCompraUseCase,
  ) {
    super();
  }

  override async perform(
    httpRequest: TVerificarCompraInput,
  ): Promise<HttpResponse<TVerificarCompraOutpur>> {
    const { data, type } = httpRequest.body;
    const response = await this.verificarCompraUseCase.execute({
      data,
      type,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        type: z.string(),
        data: z.object({
          id: z.string(),
        }),
      }),
    };
  }
}
