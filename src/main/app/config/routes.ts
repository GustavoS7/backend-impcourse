import { contentRoutes, courseRoutes, userRoutes } from '@/main/routes';
import { Express } from 'express';

export const setupRoutes = (app: Express) => {
  app.use('/api/user', userRoutes);
  app.use('/api/course', courseRoutes);
  app.use('/api/content', contentRoutes);
};
