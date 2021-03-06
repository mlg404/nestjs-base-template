import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  createSwagger(app);

  await app.listen(3000);
}
bootstrap();
