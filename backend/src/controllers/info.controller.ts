import { Request, Response, NextFunction } from 'express';
import { InfoService } from '../services/info.service.js';

export class InfoController {
  static async getInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const info = await InfoService.getPlatformInfo();
      res.status(200).json({
        success: true,
        data: info,
      });
    } catch (error) {
      next(error);
    }
  }
}
