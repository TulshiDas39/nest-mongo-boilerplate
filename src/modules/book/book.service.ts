import { Injectable } from '@nestjs/common';
import { StringUtil } from 'src/lib';
import { BaseService } from '../base/base.service';
import { BookRepository } from './book.repository';
import { Book } from './typing/book.schema';

@Injectable()
export class BookService extends BaseService<Book>{
    
    constructor(private bookRepository: BookRepository){
        super(bookRepository);
    }

    async search(keyword: string) {
        const pattern = StringUtil.SearchPattern(keyword);
        const res = await this.bookRepository.find({name:{$regex:pattern,$options:'i'}});
        return res;
    }
}
