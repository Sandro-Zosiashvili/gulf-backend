import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { BannersModule } from './banners/banners.module';

@Module({
  imports: [NewsModule, BannersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
