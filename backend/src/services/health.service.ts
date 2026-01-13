export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  uptime: number;
  timestamp: string;
  // Extension point for future database health checks
  database?: {
    connected: boolean;
    latency?: number;
  };
}

export class HealthService {
  static async getHealthStatus(): Promise<HealthStatus> {
    // For now, just return basic health info
    // In the future, this can check database connections, external services, etc.
    
    return {
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      // When database is added:
      // database: await this.checkDatabaseHealth(),
    };
  }

  // Extension point for future database health check
  // private static async checkDatabaseHealth() {
  //   try {
  //     const start = Date.now();
  //     await db.ping();
  //     const latency = Date.now() - start;
  //     return { connected: true, latency };
  //   } catch (error) {
  //     return { connected: false };
  //   }
  // }
}
