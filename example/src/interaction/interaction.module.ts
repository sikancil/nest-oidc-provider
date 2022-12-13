import { Module } from '@nestjs/common';
import { InteractionController } from './interaction.controller.js';

@Module({
  controllers: [InteractionController],
})
export class InteractionModule {}
