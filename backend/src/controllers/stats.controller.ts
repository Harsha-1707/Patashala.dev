import { Request, Response } from 'express';

export class StatsController {
  static async getStats(req: Request, res: Response): Promise<void> {
    // Return platform statistics
    res.json({
      projects: 50,
      learners: 1200,
      completionRate: 94,
      activeCourses: 12
    });
  }
}
