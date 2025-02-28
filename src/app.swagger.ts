import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

type SwaggerConfig = {
  title?: string;
  description?: string;
  version?: string;
  bearerAuth?: boolean;
  tag?: string;
};

export const initSwagger = (app: INestApplication, options: SwaggerConfig) => {
  const { title, description, version, bearerAuth, tag } = options;
  const documentBuilder = new DocumentBuilder()
    .setTitle(title || 'NestJS API')
    .setDescription(description || 'NestJS API description')
    .setVersion(version || '1.0')
    .addTag(tag || 'API');

  if (bearerAuth) {
    documentBuilder.addBearerAuth();
  }

  const config = documentBuilder.build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
};
