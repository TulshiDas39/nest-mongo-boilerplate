import * as mongoose from 'mongoose';
import { ServerConfig } from 'src/lib';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => mongoose.connect(ServerConfig.DBConnectionUrl),
  },
];