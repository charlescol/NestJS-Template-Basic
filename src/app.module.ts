import * as path from "path";
import { Module } from "@nestjs/common/decorators";
import globalConfig from "@configs/global.config";
import { ConfigModule } from "@nestjs/config";
import validationSchema from "@configs/joi/validationSchema";
import AppController from "./app.controller";
import AppService from "./app.service";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [globalConfig],
      envFilePath: path.resolve(
        process.cwd(),
        "env",
        `.env.${process.env.NODE_ENV || "local"}`
      ),
      validationSchema,
    }),
  ],
})
export default class AppModule {}
