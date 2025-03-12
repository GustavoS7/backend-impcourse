import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeCadastroUsuarioController,
  makeLoginUsuarioController,
  makeRetornarUsuarioController,
} from '../factory/presentation/controllers';

const userRoutes = Router();

userRoutes.post('/cadastro', adapter(makeCadastroUsuarioController()));
userRoutes.post('/login', adapter(makeLoginUsuarioController()));
userRoutes.get(
  '/me',
  adapterMiddleware(makeAuthMiddleware()),
  adapter(makeRetornarUsuarioController()),
);

export { userRoutes };
