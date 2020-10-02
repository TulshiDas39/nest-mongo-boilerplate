import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Env } from './lib';
import { AppModule } from './modules/app/app.module';

function configureSwagger(app:INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);
  const configService = app.get(ConfigService);
  await app.listen(configService.get(Env.PORT));
  const url = await app.getUrl();
  console.info("server listening at " + url);
}
bootstrap();
