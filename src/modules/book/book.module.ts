import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';
import { Book, BookSchema } from './typing/book.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService,BookRepository],
  exports:[BookService,BookRepository]
})
export class BookModule {}
