import { IUploadFileProvider } from '@/application/protocols/providers';
import { ICadastroAulaUseCase } from '@/domain/use-cases';
import { BadRequestError } from '@/application/errors';
import {
  ICreateContentRepository,
  IGetCoursePopulateRepository,
} from '@/application/protocols/repositories';

export class CadastroAulaUseCase implements ICadastroAulaUseCase {
  constructor(
    private courseRepository: IGetCoursePopulateRepository,
    private storageProvider: IUploadFileProvider,
    private contentRepository: ICreateContentRepository,
  ) {}

  async execute({
    title,
    file,
    description,
    courseId,
    userId,
  }: ICadastroAulaUseCase.Params): Promise<ICadastroAulaUseCase.Result> {
    const course = await this.courseRepository.getPopulate(courseId);
    if (!course || course?.authorId !== userId)
      throw new BadRequestError('Curso não encontrado');
    const url = await this.storageProvider.upload(file);
    const lastLesson = course.content[0];
    const content = await this.contentRepository.create({
      title,
      description,
      type: file.mimetype,
      url,
      courseId,
      position: lastLesson ? lastLesson.position + 1 : 1,
    });
    return content;
  }
}
