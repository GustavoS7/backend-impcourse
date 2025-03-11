import { setupRoutes } from './config';
import express from 'express';

const app = express();
setupRoutes(app);
export { app };
