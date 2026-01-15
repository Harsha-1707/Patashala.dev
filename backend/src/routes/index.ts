import { Router } from 'express';
import healthRoutes from './v1/health.routes.js';
import infoRoutes from './v1/info.routes.js';
import statsRoutes from './v1/stats.routes.js';
import contactRoutes from './v1/contact.routes.js';

const router = Router();

// Health check (non-versioned)
router.use('/health', healthRoutes);

// API v1 routes
router.use('/api/v1/info', infoRoutes);
router.use('/api/v1/stats', statsRoutes);
router.use('/api/v1/contact', contactRoutes);

export default router;
