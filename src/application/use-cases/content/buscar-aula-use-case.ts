import { IUploadPublicFileProvider } from '@/application/protocols/providers';
import { IBuscarAulaUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';
import {
  IFindContentRepository,
  IFindCourseUserRepository,
} from '@/application/protocols/repositories';

export class BuscarAulaUseCase implements IBuscarAulaUseCase {
  constructor(
    private contentRepository: IFindContentRepository,
    private userCourseRepository: IFindCourseUserRepository,
  ) {}

  async execute({
    id,
    userId,
  }: IBuscarAulaUseCase.Params): Promise<IBuscarAulaUseCase.Result> {
    const content = await this.contentRepository.find(id);
    if (!content) throw new BadRequestError('Aula não encontrada');
    const course = await this.userCourseRepository.find({
      courseId: content.courseId,
      userId,
    });
    if (!course) throw new BadRequestError('Curso não encontrada');
    return content;
  }
}
