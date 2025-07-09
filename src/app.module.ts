import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DescriptionModule } from './modules/description/description.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DescriptionModule,
  ],
})
export class AppModule {} 