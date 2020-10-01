import { ConfigModule } from "@nestjs/config/dist";

const specifiedEnvFile = process.env.NODE_ENV === 'development'?'.env.development':'.env.production';

export const config = ConfigModule.forRoot({
    envFilePath: ['.env',specifiedEnvFile],
});