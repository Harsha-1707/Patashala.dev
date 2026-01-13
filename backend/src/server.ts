import { createApp } from './app.js';
import { env } from './config/env.js';
import { Logger } from './utils/logger.js';

const app = createApp();

app.listen(env.port, () => {
  Logger.info(`🚀 Server running on port ${env.port}`);
  Logger.info(`📝 Environment: ${env.nodeEnv}`);
  Logger.info(`🔗 CORS enabled for: ${env.corsOrigin}`);
  Logger.info(`✅ API available at http://localhost:${env.port}/api/v1`);
  Logger.info(`💚 Health check at http://localhost:${env.port}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  Logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  Logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});
