import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: process.env.NODE_EN === 'prod' ? undefined : false,
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
