import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { TestingModule } from "@nestjs/testing";

export type E2eApp = {
  app: NestFastifyApplication;
  appModule: TestingModule;
  versionManagerQueueMock?: jest.SpyInstance;
  bearerToken?: string;
};
