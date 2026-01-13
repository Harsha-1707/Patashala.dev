import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import { Logger } from './utils/logger.js';

export const createApp = (): Express => {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration
  app.use(cors({
    origin: env.corsOrigin,
    credentials: true,
  }));

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging (development only)
  if (env.isDevelopment) {
    app.use((req, res, next) => {
      Logger.debug(`${req.method} ${req.path}`);
      next();
    });
  }

  // Routes
  app.use('/', routes);

  // 404 handler (must be after all routes)
  app.use(notFound);

  // Error handling middleware (must be last)
  app.use(errorHandler);

  return app;
};
