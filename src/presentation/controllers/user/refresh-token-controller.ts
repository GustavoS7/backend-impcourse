import { Controller, HttpResponse } from '@/presentation/protocols';
import { IRefreshTokenUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type IRefreshTokenInput = {
  body: { refreshToken: string };
};

type ILoginUsuarioOutput = {
  accessToken: string;
  refreshToken: string;
};

export class RefreshTokenController extends Controller {
  constructor(private readonly refreshTokenUseCase: IRefreshTokenUseCase) {
    super();
  }

  override async perform(
    httpRequest: IRefreshTokenInput,
  ): Promise<HttpResponse<ILoginUsuarioOutput>> {
    const { refreshToken } = httpRequest.body;
    const response = await this.refreshTokenUseCase.execute({
      refreshToken,
    });
    return {
      statusCode: 200,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        refreshToken: z
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
