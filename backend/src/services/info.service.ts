export interface PlatformInfo {
  name: string;
  version: string;
  description: string;
  environment: string;
}

export class InfoService {
  static async getPlatformInfo(): Promise<PlatformInfo> {
    return {
      name: 'patashala.dev',
      version: '1.0.0',
      description: 'A platform for developers who learn by building real projects',
      environment: process.env.NODE_ENV || 'development',
    };
  }
}
