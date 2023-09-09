import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  //app.use(cookieParser());
  app.enableCors({
    origin: [
      'https://gema-gov-gh-testing.netlify.app',
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:4200',
      'https://gema.gov.gh',
      'https://gema.gov.gh:2083',
      'https://gema-gov-gh.netlify.app',
    ],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 7000);
}
bootstrap();
