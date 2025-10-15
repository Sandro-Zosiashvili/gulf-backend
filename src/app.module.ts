import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { BannersModule } from './banners/banners.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [NewsModule, BannersModule, PriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
