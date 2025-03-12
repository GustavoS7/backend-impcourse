import { Express, json } from 'express';
import cors from 'cors';

export const setupMiddlewares = (app: Express) => {
  app.use(cors());
  app.use(json());
};
