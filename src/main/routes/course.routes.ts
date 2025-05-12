import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import multer from 'multer';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeBuscarCursoAutorController,
  makeBuscarCursoController,
  makeCadastroCursoController,
  makeListarCursosAutorController,
  makeListarCursosController,
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

courseRoutes.get('/:id', adapter(makeBuscarCursoController()));

courseRoutes.post('/listar', adapter(makeListarCursosController()));

export { courseRoutes };
