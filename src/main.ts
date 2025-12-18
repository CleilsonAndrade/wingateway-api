import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('wingateway-api/v1');

  const config = new DocumentBuilder()
    .setTitle('WinGateway-API - API Documentation')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .setContact(
      'Support',
      'https://mimostyle.com.br/',
      'suporte@mimostyle.com.br',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    useGlobalPrefix: true,
  });

  const port = process.env.PORT || 3000;

  await app.listen(port);

  logger.log(`Base URL: http://localhost:${port}/wingateway-api/v1`);
  logger.log(`Swagger: http://localhost:${port}/wingateway-api/v1/docs`);
}

bootstrap().catch((err: unknown) => {
  const message = err instanceof Error ? err.stack : String(err);
  new Logger('Bootstrap').error('Errors starting the application', message);
  process.exit(1);
});
