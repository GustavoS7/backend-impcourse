import { makeCadastroAulaController } from '../factory/presentation/controllers';
import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import multer from 'multer';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';

const contentRoutes = Router();

contentRoutes.post(
  '/cadastro',
  adapterMiddleware(makeAuthMiddleware()),
  multer().single('file'),
  adapter(makeCadastroAulaController()),
);

export { contentRoutes };
