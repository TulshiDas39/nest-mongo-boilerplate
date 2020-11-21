import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ServerConfig } from 'src/lib/config/ServerConfig';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';


const mongooseModuleOption:MongooseModuleOptions={
  useUnifiedTopology:true,
  useNewUrlParser:true,
}

@Module({
  imports: [
  MongooseModule.forRoot(ServerConfig.DBConnectionUrl,mongooseModuleOption),
  AuthModule,UserModule
],
})
export class AppModule {}
