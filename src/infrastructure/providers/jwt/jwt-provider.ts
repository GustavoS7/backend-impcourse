import jwt from 'jsonwebtoken';
import {
  ISignTokenProvider,
  IVerifyTokenProvider,
} from '@/application/protocols/providers';

export class JwtProvider implements IVerifyTokenProvider, ISignTokenProvider {
  verify(data: IVerifyTokenProvider.Params): IVerifyTokenProvider.Result {
    try {
      const result = jwt.verify(data.token, data.secret);
      return result as any;
    } catch (error) {
      return null;
    }
  }

  sign(data: ISignTokenProvider.Params): string {
    const token = jwt.sign(data.payload, data.secret, {
      expiresIn: data.expiresIn,
    });
    return token;
  }
}
