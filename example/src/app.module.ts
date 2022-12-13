import { Module } from '@nestjs/common';
import { OidcModule } from 'nest-oidc-provider';
import { OidcConfigModule } from './config/oidc-config.module.js';
import { OidcConfigService } from './config/oidc-config.service.js';
import { AppController } from './app.controller.js';
import { InteractionModule } from './interaction/interaction.module.js';

@Module({
  imports: [
    OidcModule.forRootAsync({
      imports: [OidcConfigModule],
      useExisting: OidcConfigService,
    }),
    InteractionModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
