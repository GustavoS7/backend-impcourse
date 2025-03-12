import { IGetUserByIdRepository } from '@/application/protocols/repositories';
import { IRefreshTokenUseCase } from '@/domain/use-cases';
import { UnauthorizedError } from '@/application/errors';
import { env } from '@/main/app/config';
import {
  ISignTokenProvider,
  IVerifyTokenProvider,
} from '@/application/protocols/providers';

const TEN_MINUTES = 60 * 10;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export class RefreshTokenUseCase implements IRefreshTokenUseCase {
  constructor(
    private tokenProvider: IVerifyTokenProvider & ISignTokenProvider,
    private userRepo: IGetUserByIdRepository,
  ) {}

  async execute({
    refreshToken,
  }: IRefreshTokenUseCase.Params): Promise<IRefreshTokenUseCase.Result> {
    const payload = this.tokenProvider.verify({
      token: refreshToken,
      secret: env.REFRESH_TOKEN_SECRET,
    });
    if (!payload) throw new UnauthorizedError();
    const user = await this.userRepo.get(payload.userId);
    if (!user) throw new UnauthorizedError();
    const accessToken = this.generateAccessToken(payload.userId);
    const refresh = this.generateRefreshToken(payload.userId);
    return { accessToken, refreshToken: refresh };
  }

  private generateRefreshToken(userId: string) {
    const refreshToken = this.signToken(
      { userId },
      env.REFRESH_TOKEN_SECRET,
      THIRTY_DAYS,
    );
    return refreshToken;
  }

  private generateAccessToken(userId: string) {
    const accessToken = this.signToken(
      { userId },
      env.ACCESS_TOKEN_SECRET,
      TEN_MINUTES,
    );
    return accessToken;
  }

  private signToken(
    payload: { [key: string]: string },
    secret: string,
    expiresIn: number,
  ) {
    const token = this.tokenProvider.sign({
      payload,
      expiresIn,
      secret,
    });

    return token;
  }
}
