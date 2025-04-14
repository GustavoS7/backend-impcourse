import { IUploadPublicFileProvider } from '@/application/protocols/providers';
import { ICreateCourseRepository } from '@/application/protocols/repositories';
import { ICadastroCursoUseCase } from '@/domain/use-cases';

export class CadastroCursoUseCase implements ICadastroCursoUseCase {
  constructor(
    private storageProvider: IUploadPublicFileProvider,
    private courseRepository: ICreateCourseRepository,
  ) {}

  async execute({
    category,
    description,
    price,
    title,
    userId,
    file,
  }: ICadastroCursoUseCase.Params): Promise<ICadastroCursoUseCase.Result> {
    let cover = null;
    if (file) {
      cover = await this.storageProvider.uploadPublic(file);
    }
    const course = await this.courseRepository.create({
      authorId: userId,
      category,
      description,
      price,
      title,
      cover,
    });
    return course;
  }
}
