import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';

@Controller('upload')
export class UploadImageController {
  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig)) // 'image' is the name of the field in the multipart form
  uploadImage(@UploadedFile() file) {
    // Handle the uploaded file here
    console.log('file uploaded successful');
    console.log(file); // Access the file object with its details
  }
}
