import { HttpResponse, appError, badRequest, serverError } from '.';
import { AppError } from '@/application/errors';
import { ZodSchema } from 'zod';

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<HttpResponse>;

  abstract validationSchema(): ZodSchema<any> | null;

  private validate(httpRequest: any): Error | undefined {
    const schema = this.validationSchema();
    if (!schema) return undefined;

    const result = schema.safeParse(httpRequest);
    if (!result.success) {
      return new Error(result.error.errors.map((e) => e.message).join(', '));
    }
  }

  async handle(httpRequest: any): Promise<HttpResponse> {
    const error = this.validate(httpRequest);
    if (error !== undefined) return badRequest(error);
    try {
      return await this.perform(httpRequest);
    } catch (error) {
      if (error instanceof AppError) {
        return appError(error);
      }
      return serverError(error);
    }
  }
}
