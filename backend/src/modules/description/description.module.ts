import { Module } from '@nestjs/common';
import { DescriptionController } from './description.controller';

@Module({
  controllers: [DescriptionController],
  providers: [],
})
export class DescriptionModule {}
