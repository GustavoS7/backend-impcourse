import { ICadastroUsuarioUseCase } from '@/domain/use-cases';
import {
  ICreateUserRepository,
  IFindUserByEmailRepository,
} from '@/application/protocols/repositories';

export class CadastroUsuarioUseCase implements ICadastroUsuarioUseCase {
  constructor(
    private userRepo: ICreateUserRepository & IFindUserByEmailRepository,
  ) {}

  async execute({
    email,
    name,
    senha,
  }: ICadastroUsuarioUseCase.Params): Promise<ICadastroUsuarioUseCase.Result> {
    const existedUser = await this.userRepo.findByEmail(email);
    if (existedUser) throw new Error('E-mail já cadastrado');
    throw new Error('Non implemented method');
  }
}
