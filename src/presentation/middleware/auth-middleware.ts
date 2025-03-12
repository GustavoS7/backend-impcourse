import { IVerifyTokenProvider } from '@/application/protocols/providers';
import { env } from '@/main/app/config';
import {
  forbidden,
  HttpResponse,
  Middleware,
  unauthorized,
} from '@/presentation/protocols';

export class AuthMiddleware implements Middleware {
  constructor(private tokenProvider: IVerifyTokenProvider) {}

  async handle(httpRequest: any): Promise<HttpResponse> {
    if (!httpRequest.headers.authorization) return unauthorized();

    const bearerToken = httpRequest.headers.authorization;
    const token = bearerToken.split(' ')[1];

    const payload = this.tokenProvider.verify({
      token,
      secret: env.ACCESS_TOKEN_SECRET,
    });

    if (!payload) return forbidden();

    return {
      statusCode: 200,
      payload: {
        user: payload,
      },
    };
  }
}
