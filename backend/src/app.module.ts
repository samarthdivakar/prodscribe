import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DescriptionModule } from './modules/description/description.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DescriptionModule,
  ],
  controllers: [AppController], // <--- THIS MUST BE PRESENT
  providers: [AppService],      // <--- THIS MUST BE PRESENT (or empty array if not used)
})
export class AppModule {}
