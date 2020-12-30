import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SearchDto } from 'src/lib/dto/Search.dto';
import { Validation } from '../app/validation.pipe';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BaseController } from '../base/base.controller';
import { BookService } from './book.service';
import { Book } from './typing/book.schema';
import { CreateBook } from './typing/dto/createBook.dto';

@UseGuards(JwtAuthGuard)
@Controller('book')
export class BookController extends BaseController<Book>{
    constructor(private bookService:BookService){
        super(bookService);
    }

    @Get('all')
    getAll(){
        return this.bookService.getAll();
    }

    @Post()
    create(@Body(new Validation()) payload: CreateBook){
        return this.bookService.create({
            name:payload.name,
            editions: payload.editions,
            level: payload.level,
            writers: payload.writers
        })
    }

    @Get('search')
    async Search(@Query('keyword') keyword: string, @Query('limit') limit:number){
       const res = await this.bookService.search(keyword);
       return res;
    }
}
