import { Module } from '@nestjs/common';
import { DescriptionController } from './description.controller';
import { DescriptionService } from './description.service';
import { OpenAIService } from './openai.service';

@Module({
  controllers: [DescriptionController],
  providers: [DescriptionService, OpenAIService],
})
export class DescriptionModule {} 