import { makeVerificarCompraController } from '@/main/factory/presentation/controllers';
import { contentRoutes, courseRoutes, userRoutes } from '@/main/routes';
import { adaptExpressRoute } from '@/main/adapters';
import { Express } from 'express';

export const setupRoutes = (app: Express) => {
  app.use('/api/user', userRoutes);
  app.use('/api/course', courseRoutes);
  app.use('/api/content', contentRoutes);
  app.post('/webhook', adaptExpressRoute(makeVerificarCompraController()));
};
