import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { GridFsMulterConfigService } from './multer-config.service';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
    imports:[
        MulterModule.registerAsync({
            useClass: GridFsMulterConfigService,
        }),
    ],
    controllers: [FileController, FileController],
    providers: [FileService],
})
export class FileModule {}
