import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TData } from 'src/lib';
import { BaseRepository } from '../base/base.repository';
import { Book } from './typing/book.schema';

@Injectable()
export class BookRepository extends BaseRepository<Book>{
    
    constructor(@InjectModel(Book.name) private bookModel:Model<TData<Book>>){
        super(bookModel);
    }

    // search(keyword: string) {
    //     this.bookModel.
    // }
}
