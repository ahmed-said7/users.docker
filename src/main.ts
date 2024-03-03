import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { catchExceptionsFilter } from './filters/base.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {httpAdapter}=app.get(HttpAdapterHost)
  app.useGlobalFilters(new catchExceptionsFilter(httpAdapter))
  await app.listen(4000);
}
bootstrap();
