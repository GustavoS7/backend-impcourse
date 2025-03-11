import { userRoutes } from '@/main/routes';
import { Express } from 'express';

export const setupRoutes = (app: Express) => {
  app.use('/api/user', userRoutes);
};
