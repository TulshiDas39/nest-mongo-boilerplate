import { NestFactory } from '@nestjs/core';
import { ServiceConfig } from './lib';
import { ServerConfig } from './lib/config/ServerConfig';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ServiceConfig.configureSwagger(app);
  await app.listen(ServerConfig.Port);
  const url = await app.getUrl();
  console.info("server listening at " + url);
}
bootstrap();
