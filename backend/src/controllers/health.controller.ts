import { Request, Response, NextFunction } from 'express';
import { HealthService } from '../services/health.service.js';

export class HealthController {
  static async getHealth(req: Request, res: Response, next: NextFunction) {
    try {
      const health = await HealthService.getHealthStatus();
      res.status(200).json({
        success: true,
        data: health,
      });
    } catch (error) {
      next(error);
    }
  }
}
