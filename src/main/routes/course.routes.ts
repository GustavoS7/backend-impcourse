import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import multer from 'multer';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeCadastroCursoController,
  makeListarCursosAutorController,
} from '../factory/presentation/controllers';

const courseRoutes = Router();

courseRoutes.post(
  '/cadastro',
  adapterMiddleware(makeAuthMiddleware()),
  multer().single('file'),
  adapter(makeCadastroCursoController()),
);

courseRoutes.get(
  '/autor',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeListarCursosAutorController()),
);

export { courseRoutes };
