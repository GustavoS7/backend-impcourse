import { Controller, HttpResponse } from '@/presentation/protocols';
import { ICadastroCursoUseCase } from '@/domain/use-cases';
import { TCourse } from '@/domain/models';
import { z } from 'zod';

type TCadastroCourseInput = {
  body: {
    title: string;
    description: string;
    price: number;
    category: string;
  };
  user: { userId: string };
  file: Express.Multer.File;
};

type TCadastroCursoOutput = TCourse;

export class CadastroCursoController extends Controller {
  constructor(private readonly cadastroCursoUseCase: ICadastroCursoUseCase) {
    super();
  }

  override async perform(
    httpRequest: TCadastroCourseInput,
  ): Promise<HttpResponse<TCadastroCursoOutput>> {
    const { category, description, price, title } = httpRequest.body;
    const { userId } = httpRequest.user;
    const { file } = httpRequest;
    const response = await this.cadastroCursoUseCase.execute({
      category,
      description,
      price,
      title,
      userId,
      file,
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
        price: z.coerce
          .number({
            required_error: 'Campo price precisa ser especificado',
            invalid_type_error: 'Campo price precisa ser especificado',
          })
          .min(0, { message: 'Preço não pode ser negativo' }),
        category: z.coerce
          .string({
            invalid_type_error: 'Campo category precisa ser especificado',
          })
          .optional(),
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

          const allowedTypes = ['image/jpeg', 'image/png'];
          const maxSizeInBytes = 5 * 1024 * 1024;

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
