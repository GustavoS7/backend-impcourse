import { IFetchCoursesByAuthorRepository } from '@/application/protocols/repositories';
import { IListarCursosAutorUseCase } from '@/domain/use-cases';

export class ListarCursosAutorUseCase implements IListarCursosAutorUseCase {
  constructor(private courseRepository: IFetchCoursesByAuthorRepository) {}

  async execute({
    userId,
  }: IListarCursosAutorUseCase.Params): Promise<IListarCursosAutorUseCase.Result> {
    const courses = await this.courseRepository.fetchByAuthor(userId);
    return courses;
  }
}
