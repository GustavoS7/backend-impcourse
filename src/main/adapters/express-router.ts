import { Controller } from '@/presentation/protocols';
import { Request, Response } from 'express';

type Adapter = (controller: Controller) => any;

export const adaptExpressRoute: Adapter =
  (controller) => async (req: Request, res: Response) => {
    const { statusCode, payload, error } = await controller.handle({
      body: req.body,
      params: req.params,
      query: req.query,
      user: req.user,
    });
    const json = [200, 201, 204].includes(statusCode)
      ? payload
      : { error: error?.message ?? 'Server Error' };
    return res.status(statusCode).json(json);
  };
