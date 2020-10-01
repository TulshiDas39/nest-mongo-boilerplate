import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Env } from './lib';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get(Env.PORT));
}
bootstrap();
