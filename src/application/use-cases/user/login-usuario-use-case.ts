import { ILoginUsuarioUseCase } from '@/domain/use-cases';
import { UnauthorizedError } from '@/application/errors';
import { env } from '@/main/app/config';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/application/protocols/repositories';
import {
  IHashComparerProvider,
  ISignTokenProvider,
} from '@/application/protocols/providers';

const TEN_MINUTES = 60 * 10;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export class LoginUsuarioUseCase implements ILoginUsuarioUseCase {
  constructor(
    private userRepo: ICreateUserRepository & IFindUserByEmailRepository,
    private hashProvider: IHashComparerProvider,
    private tokensProvider: ISignTokenProvider,
  ) {}

  async execute({
    email,
    password,
  }: ILoginUsuarioUseCase.Params): Promise<ILoginUsuarioUseCase.Result> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new UnauthorizedError('Invalid credentials');
    const isValid = await this.hashProvider.compare(password, user.password);
    if (!isValid) throw new UnauthorizedError('Invalid credentials');
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken(user.id),
      this.generateRefreshToken(user.id),
    ]);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    };
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
    const token = this.tokensProvider.sign({
      payload,
      expiresIn,
      secret,
    });
    return token;
  }
}
