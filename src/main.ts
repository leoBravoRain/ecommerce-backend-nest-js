import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // removes all properties of a request’s body which are not in the DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // TODO: enable only allowed host (as this is demo this is set this way)
  app.enableCors({ origin: '*' });

  await app.listen(3333);
}
bootstrap();
