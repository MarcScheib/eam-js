/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setupSwagger } from './swagger';

const globalPrefix = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix(globalPrefix);
  app.use(helmet());
  app.use(compression());

  if (!environment.production) {
    setupSwagger(app);
  }

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
