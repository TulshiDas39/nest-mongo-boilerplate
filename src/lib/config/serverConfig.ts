import { ConfigModule } from "@nestjs/config/dist";

const specifiedEnvFile = process.env.NODE_ENV === 'development'?'.env.development':'.env.production';

export class ServerConfig{
    static readonly env = ConfigModule.forRoot({envFilePath: ['.env',specifiedEnvFile]});
    static readonly DBConnectionUrl = "mongodb://localhost:27017/nest"
}