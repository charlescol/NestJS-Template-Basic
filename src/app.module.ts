import { ConfigModule } from "@nestjs/config";
import AppService from "./app.service";
import AppController from "./app.controller";
import * as path from "path";
import { Module } from "@nestjs/common/decorators";

const ENV = process.env.NODE_ENV || "local";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
      envFilePath: path.resolve(process.cwd(), "env", `.env.${ENV}`),
    }),
  ],
})
export default class AppModule {}
