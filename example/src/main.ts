import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../', 'views'));
  app.setViewEngine('ejs');

  app.use('/interaction', bodyParser.urlencoded({ extended: false }));

  const PORT = 3001;
  await app.listen(PORT);

  const logger = new Logger(`nest-oidc-provider-example`);
  logger.log(`Listening on http://localhost:${PORT}`);
  logger.log(
    `Discovery endpoint: http://localhost:${PORT}/oidc/.well-known/openid-configuration`,
  );
}
bootstrap();
