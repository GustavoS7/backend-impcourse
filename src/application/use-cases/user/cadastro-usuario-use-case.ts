import { ICadastroUsuarioUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';
import { env } from '@/main/app/config';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/application/protocols/repositories';
import {
  IHashGeneratorProvider,
  ISignTokenProvider,
} from '@/application/protocols/providers';

const TEN_MINUTES = 60 * 10;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export class CadastroUsuarioUseCase implements ICadastroUsuarioUseCase {
  constructor(
    private userRepo: ICreateUserRepository & IFindUserByEmailRepository,
    private hashProvider: IHashGeneratorProvider,
    private tokensProvider: ISignTokenProvider,
  ) {}

  async execute({
    email,
    name,
    password,
  }: ICadastroUsuarioUseCase.Params): Promise<ICadastroUsuarioUseCase.Result> {
    const existedUser = await this.userRepo.findByEmail(email);
    if (existedUser) throw new BadRequestError('E-mail já cadastrado');
    const passwordHashed = await this.hashProvider.hash(password);
    const user = await this.userRepo.create({
      email,
      name,
      password: passwordHashed,
    });
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
