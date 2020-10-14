import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { CatsController } from './cats.controller';
import { catsProviders } from './cats.provider';
import { CatsService } from './cats.service';

@Module({
  imports:[DatabaseModule],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders]
})
export class CatsModule {}
