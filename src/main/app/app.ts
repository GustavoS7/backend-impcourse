import { setupMiddlewares, setupRoutes } from './config';
import express from 'express';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
export { app };
