import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import typeOrmConfig from './config/typeOrm.config';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { AdminModule } from './admin/admin.module';

import { EventsModule } from './events/events.module';
import { DepartmentDocumentModule } from './department-document/department-document.module';

import { DepartmentModule } from './department/department.module';
import { UploadImageModule } from './upload-image/upload-image.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({}),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
    }),
    PostModule,
    UserModule,
    CommentModule,
    AdminModule,
    EventsModule,
    DepartmentDocumentModule,
    DepartmentModule,
    UploadImageModule,
  ],
  providers: [AppService],
  controllers: [],
})
export class AppModule {}
