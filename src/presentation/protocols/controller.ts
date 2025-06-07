import { HttpResponse, appError, badRequest, serverError } from '.';
import { AppError } from '@/application/errors';
import { ZodSchema } from 'zod';

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<HttpResponse>;

  abstract validationSchema(): {
    body?: ZodSchema<any>;
    params?: ZodSchema<any>;
    query?: ZodSchema<any>;
    user?: ZodSchema<any>;
    file?: ZodSchema<any>;
  };

  private validate(httpRequest: any): Error | undefined {
    const schemas = this.validationSchema();

    if (schemas.body) {
      const result = schemas.body.safeParse(httpRequest.body);
      if (!result.success)
        return new Error(result.error.errors.map((e) => e.message).join(', '));
    }

    if (schemas.params) {
      const result = schemas.params.safeParse(httpRequest.params);
      if (!result.success)
        return new Error(result.error.errors.map((e) => e.message).join(', '));
    }

    if (schemas.query) {
      const result = schemas.query.safeParse(httpRequest.query);
      if (!result.success)
        return new Error(result.error.errors.map((e) => e.message).join(', '));
    }

    if (schemas.user) {
      const result = schemas.user.safeParse(httpRequest.user);
      if (!result.success)
        return new Error(result.error.errors.map((e) => e.message).join(', '));
    }

    if (schemas.file) {
      const result = schemas.file.safeParse(httpRequest.file);
      if (!result.success)
        return new Error(result.error.errors.map((e) => e.message).join(', '));
    }
  }

  async handle(httpRequest: any): Promise<HttpResponse> {
    const error = this.validate(httpRequest);
    if (error !== undefined) return badRequest(error);
    try {
      return await this.perform(httpRequest);
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        return appError(error);
      }
      return serverError(error);
    }
  }
}
