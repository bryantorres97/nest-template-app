import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { config } from './config/configuration';

async function main() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const port = config.port;

  if (config.nodeEnv !== 'production') {
    initSwagger(app, { title: 'NestJS API template', bearerAuth: true });
  }

  await app.listen(port);
  const url = await app.getUrl();
  logger.log(`Server running on ${url}`);

  if (config.nodeEnv === 'production') {
    logger.log('Swagger is disabled in production mode');
  } else {
    logger.log(`Swagger is running on ${url}/docs`);
  }
}

main();
