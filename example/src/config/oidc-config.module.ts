import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module.js';
import { OidcConfigService } from './oidc-config.service.js';

@Module({
  imports: [DatabaseModule],
  providers: [OidcConfigService],
  exports: [OidcConfigService],
})
export class OidcConfigModule {}
