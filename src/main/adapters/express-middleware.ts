import { NextFunction, Request, Response } from 'express';
import { Middleware } from '@/presentation/protocols';

type Adapter = (middleware: Middleware) => any;

export const adaptExpressMiddleware: Adapter =
  (middleware) => async (req: Request, res: Response, next: NextFunction) => {
    const httpResponse = await middleware.handle({
      headers: req.headers,
    });

    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.payload);
      next();
    } else {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse?.error?.message ?? 'Internal Error',
      });
    }
  };
