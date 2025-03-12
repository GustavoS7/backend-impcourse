import { adaptExpressRoute as adapter } from '../adapters';
import { Router } from 'express';
import {
  makeCadastroUsuarioController,
  makeLoginUsuarioController,
} from '../factory/presentation/controllers';

const userRoutes = Router();

userRoutes.post('/cadastro', adapter(makeCadastroUsuarioController()));
userRoutes.post('/login', adapter(makeLoginUsuarioController()));

export { userRoutes };
