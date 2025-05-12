import { IFetchCoursesRepository } from '@/application/protocols/repositories';
import { IListarCursosUseCase } from '@/domain/use-cases';

export class ListarCursosUseCase implements IListarCursosUseCase {
  constructor(private courseRepository: IFetchCoursesRepository) {}

  async execute({
    filter,
    page,
  }: IListarCursosUseCase.Params): Promise<IListarCursosUseCase.Result> {
    const {
      courses,
      page: pagina,
      total,
    } = await this.courseRepository.fetch({
      filter,
      page,
    });
    return {
      courses,
      page: pagina,
      total,
    };
  }
}
