import { Router } from 'express';
import multer from 'multer';
import {
  makeAuthMiddleware,
  makeUserMiddleware,
} from '../factory/presentation/middleware';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeBuscarCursoAutorController,
  makeBuscarCursoController,
  makeBuscarMeuCursoController,
  makeCadastroCursoController,
  makeComprarCursoController,
  makeListarCursosAutorController,
  makeListarCursosController,
  makeListarMeusCursosController,
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

courseRoutes.get(
  '/:id',
  adapterMiddleware(makeUserMiddleware()),
  adapter(makeBuscarCursoController()),
);

courseRoutes.post('/listar', adapter(makeListarCursosController()));

courseRoutes.get(
  '/user/:id',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeBuscarMeuCursoController()),
);

courseRoutes.post(
  '/user',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeListarMeusCursosController()),
);

courseRoutes.post(
  '/purchase',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeComprarCursoController()),
);

export { courseRoutes };
