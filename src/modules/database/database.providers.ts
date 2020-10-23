import * as mongoose from 'mongoose';
import { ServerCommonConfig } from 'src/lib';
import { ServerConfig } from 'src/lib/config/ServerConfig';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.connect(ServerConfig.DBConnectionUrl),
  },
];