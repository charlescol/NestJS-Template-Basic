import { NestFastifyApplication } from "@nestjs/platform-fastify";
import JestService from "@providers/jest/jest.service";

describe("User controller tests", () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const appContext = await JestService.getE2EApp();
    app = appContext.app;
  });

  describe("/GET /api/hello", () => {
    async function verifyHello(
      name: string,
      expectedStatus: number
    ): Promise<void> {
      await app
        .inject({
          method: "GET",
          url: `/api/hello?name=${name}`,
        })
        .then(
          async ({ statusCode }: { statusCode: number; payload: string }) => {
            expect(statusCode).toBe(expectedStatus);
          }
        );
    }
    it("Should say hello", async () => {
      verifyHello("John", 200);
    });
    it("Should not say hello", async () => {
      verifyHello("John123", 400);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
