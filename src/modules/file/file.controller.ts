import { Controller, Get, HttpException, HttpStatus, Param, Post, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConsumes, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileResponseVm } from './typing/file-response-vm.model';
import { FileService } from './file.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/file')
@ApiTags('Attachments')
@UseGuards(JwtAuthGuard)
export class FileController {
    constructor(private filesService: FileService){}

    @Post('')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FilesInterceptor('file'))
    upload(@Req() request, @UploadedFiles() files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                encoding: file.encoding,
                mimetype: file.mimetype,
                id: file.id,
                filename: file.filename,
                metadata: file.metadata,
                bucketName: file.bucketName,
                chunkSize: file.chunkSize,
                size: file.size,
                md5: file.md5,
                uploadDate: file.uploadDate,
                contentType: file.contentType,
            };
            response.push(fileReponse);
        });
        // this.filesService.writeFile(files);
        return response;
    }
    
    @Get('info/:id')
    @ApiBadRequestResponse({ type: HttpException })
    async getFileInfo(@Param('id') id: string): Promise<FileResponseVm> {        
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if(!filestream){
            throw new HttpException('An error occurred while retrieving file info', HttpStatus.EXPECTATION_FAILED)
        }
        return {
            message: 'File has been detected',
            file: file
        }
    }

    @Get(':id')
    @ApiBadRequestResponse({ type: HttpException })
    async getFile(@Param('id') id: string, @Res() res) {        
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if(!filestream){
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        }
        res.header('Content-Type', file.contentType);
        return filestream.pipe(res)
    }

    @Get('download/:id')
    @ApiBadRequestResponse({ type: HttpException })
    async downloadFile(@Param('id') id: string, @Res() res) {
        const file = await this.filesService.findInfo(id)        
        const filestream = await this.filesService.readStream(id)
        if(!filestream){
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        } 
        res.header('Content-Type', file.contentType);
        res.header('Content-Disposition', 'attachment; filename=' + file.filename);
        return filestream.pipe(res) 
    }

    @Get('delete/:id')
    @ApiBadRequestResponse({ type: HttpException })
    @ApiCreatedResponse({ type: FileResponseVm })
    async deleteFile(@Param('id') id: string): Promise<FileResponseVm> {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.deleteFile(id)
        if(!filestream){
            throw new HttpException('An error occurred during file deletion', HttpStatus.EXPECTATION_FAILED)
        }        
        return {
            message: 'File has been deleted',
            file: file
        }
    }
}
