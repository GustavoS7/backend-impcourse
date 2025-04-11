import { IFetchCoursesByAuthorRepository } from '@/application/protocols/repositories';
import { IListarCursosUsuarioUseCase } from '@/domain/use-cases';

export class ListarCursosUsuarioUseCase implements IListarCursosUsuarioUseCase {
  constructor(private courseRepository: IFetchCoursesByAuthorRepository) {}

  async execute({
    userId,
  }: IListarCursosUsuarioUseCase.Params): Promise<IListarCursosUsuarioUseCase.Result> {
    const courses = await this.courseRepository.fetchByAuthor(userId);
    return courses;
  }
}
