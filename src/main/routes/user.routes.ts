import { makeAuthMiddleware } from '../factory/presentation/middleware';
import { Router } from 'express';
import {
  adaptExpressRoute as adapter,
  adaptExpressMiddleware as adapterMiddleware,
} from '../adapters';
import {
  makeCadastroUsuarioController,
  makeLoginUsuarioController,
  makeRefreshTokenController,
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
userRoutes.post('/refreshToken', adapter(makeRefreshTokenController()));

export { userRoutes };
