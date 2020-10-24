import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from 'src/lib/config/ServerConfig';
import { AuthModule } from '../auth/auth.module';
import { CatsModule } from '../cats/cats.module';
import { UserModule } from '../user/user.module';


@Module({
  imports: [
  CatsModule,MongooseModule.forRoot(ServerConfig.DBConnectionUrl),
  AuthModule,UserModule
],
})
export class AppModule {}
