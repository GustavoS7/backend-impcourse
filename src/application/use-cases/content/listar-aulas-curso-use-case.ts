import { IFetchContentByCourseRepository } from '@/application/protocols/repositories';
import { IListarAulasCursoUseCase } from '@/domain/use-cases';

export class ListarAulasCursoUseCase implements IListarAulasCursoUseCase {
  constructor(private contentRepository: IFetchContentByCourseRepository) {}

  async execute({
    courseId,
  }: IListarAulasCursoUseCase.Params): Promise<IListarAulasCursoUseCase.Result> {
    const content = await this.contentRepository.fetchByCourse(courseId);
    return content;
  }
}
