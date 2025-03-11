import { makeCadastroUsuarioController } from '../factory/presentation/controllers';
import { adaptExpressRoute as adapter } from '../adapters';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/cadastro', adapter(makeCadastroUsuarioController()));

export { userRoutes };
