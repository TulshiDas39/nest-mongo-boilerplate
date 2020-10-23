import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CatsModule } from '../cats/cats.module';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
