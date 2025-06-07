import { IFetchCoursesByUserRepository } from '@/application/protocols/repositories';
import { IListarMeusCursosUseCase } from '@/domain/use-cases';

export class ListarMeusCursosUseCase implements IListarMeusCursosUseCase {
  constructor(private userCourseRepository: IFetchCoursesByUserRepository) {}

  async execute({
    userId,
    page,
  }: IListarMeusCursosUseCase.Params): Promise<IListarMeusCursosUseCase.Result> {
    const {
      courses,
      page: pagina,
      total,
    } = await this.userCourseRepository.fetchByUser({
      userId,
      page,
    });
    return {
      courses,
      page: pagina,
      total,
    };
  }
}
