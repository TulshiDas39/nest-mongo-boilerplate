import { Module } from '@nestjs/common';
import { config } from 'src/lib';
import { CatsModule } from '../cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule,config],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
