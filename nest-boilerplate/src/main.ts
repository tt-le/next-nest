import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'verbose', 'log'],
  });
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: process.env.NODE_EN === 'prod' ? undefined : false,
  //   }),
  // );
  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET, PUT, POST, DELETE',
  //   allowedHeaders: 'Content-Type, Authorization',
  // });
  await app.listen(3000);
}
bootstrap();
