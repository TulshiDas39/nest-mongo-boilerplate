import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose'
import { Connection } from 'mongoose'
import { IGridFSWriteOption, MongoGridFS } from 'mongo-gridfs'
import { GridFSBucketReadStream } from 'mongodb'
import { FileInfoVm } from './typing/file-info-vm.model'
import { response } from 'express';
import { MetadataArgsStorage } from 'typeorm/metadata-args/MetadataArgsStorage';

@Injectable()
export class FileService {
  private fileModel: MongoGridFS;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.fileModel = new MongoGridFS(this.connection.db, 'fs');
  }

  async readStream(id: string): Promise<GridFSBucketReadStream> {
    return await this.fileModel.readFileStream(id);
  }

  async findInfo(id: string): Promise<FileInfoVm> {
    const result = await this.fileModel
      .findById(id).catch( err => {throw new HttpException('File not found', HttpStatus.NOT_FOUND)} )
      .then(result => result)
    return{
      filename: result.filename,
      length: result.length,
      chunkSize: result.chunkSize,
      md5: result.md5,
      contentType: result.contentType      
    }
  }

  async writeStream(stream, options?: IGridFSWriteOption): Promise<any> {
    return await this.fileModel
      .writeFileStream(stream, options)
      .then((res)=>{console.log(res)});
  }

  public async writeFile(
    file: any,
    metadata?: MetadataArgsStorage,
  ): Promise<any> {
    return await this.fileModel
      .uploadFile(
        file.path,
        {
          filename: file.originalname,
          contentType: file.mimetype,
          metadata,
        },
        true,
      )
      .then(res=>{
        console.log(res);
      });
  }


  async deleteFile(id: string): Promise<boolean>{
    return await this.fileModel.delete(id)
  }
}