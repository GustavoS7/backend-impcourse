import { Controller, HttpResponse } from '@/presentation/protocols';
import { ICadastroAulaUseCase } from '@/domain/use-cases';
import { z } from 'zod';

type TCadastroAulaInput = {
  body: { title: string; description: string; courseId: string };
  user: { userId: string };
  file: Express.Multer.File;
};

type TCadastroAulaOutput = ICadastroAulaUseCase.Result;

export class CadastroAulaController extends Controller {
  constructor(private readonly cadastroAulaUseCase: ICadastroAulaUseCase) {
    super();
  }

  override async perform(
    httpRequest: TCadastroAulaInput,
  ): Promise<HttpResponse<TCadastroAulaOutput>> {
    const { description, title, courseId } = httpRequest.body;
    const { userId } = httpRequest.user;
    const { file } = httpRequest;
    const response = await this.cadastroAulaUseCase.execute({
      file,
      description,
      title,
      courseId,
      userId,
    });
    return {
      statusCode: 201,
      payload: response,
    };
  }

  override validationSchema() {
    return {
      body: z.object({
        title: z
          .string({
            required_error: 'Campo title precisa ser especificado',
            invalid_type_error: 'Campo title precisa ser especificado',
          })
          .min(1, { message: 'Campo title precisa ter pelo menos 1 caracter' }),
        description: z
          .string({
            required_error: 'Campo description precisa ser especificado',
            invalid_type_error: 'Campo description precisa ser especificado',
          })
          .min(1, {
            message: 'Campo description precisa ter pelo menos 1 caracter',
          }),
        courseId: z
          .string({
            required_error: 'Campo courseId precisa ser especificado',
            invalid_type_error: 'Campo courseId precisa ser especificado',
          })
          .min(1, {
            message: 'Campo courseId precisa ter pelo menos 1 caracter',
          }),
      }),
      user: z.object({
        userId: z
          .string({
            required_error: 'Campo title precisa ser especificado',
            invalid_type_error: 'Campo title precisa ser especificado',
          })
          .min(1, { message: 'Campo title precisa ter pelo menos 1 caracter' }),
      }),
      file: z.custom<Express.Multer.File>(
        (file) => {
          if (!file) return false;

          const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
          const maxSizeInBytes = 50 * 1024 * 1024;

          return (
            allowedTypes.includes(file.mimetype) && file.size <= maxSizeInBytes
          );
        },
        {
          message: 'Arquivo inválido. Formato ou tamanho não permitido.',
        },
      ),
    };
  }
}
