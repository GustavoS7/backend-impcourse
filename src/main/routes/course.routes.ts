import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import multer from 'multer';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeBuscarCursoAutorController,
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

courseRoutes.get(
  '/autor/:id',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeBuscarCursoAutorController()),
);

export { courseRoutes };
