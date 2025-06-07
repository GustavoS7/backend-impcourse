import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import multer from 'multer';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeBuscarAulaController,
  makeCadastroAulaController,
  makeListarAulasCursoController,
} from '../factory/presentation/controllers';

const contentRoutes = Router();

contentRoutes.post(
  '/cadastro',
  adapterMiddleware(makeAuthMiddleware()),
  multer().single('file'),
  adapter(makeCadastroAulaController()),
);

contentRoutes.get(
  '/listar/:courseId',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeListarAulasCursoController()),
);

contentRoutes.get(
  '/:id',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeBuscarAulaController()),
);

export { contentRoutes };
