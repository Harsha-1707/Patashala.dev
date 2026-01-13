import { Router } from 'express';
import healthRoutes from './v1/health.routes.js';
import infoRoutes from './v1/info.routes.js';

const router = Router();

// Health check (non-versioned)
router.use('/health', healthRoutes);

// API v1 routes
router.use('/api/v1/info', infoRoutes);

export default router;
