import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { config } from './config/configuration';

async function main() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const port = config.port;
  await app.listen(port);
  const url = await app.getUrl();
  logger.log(`Server running on ${url}`);
}

main();
