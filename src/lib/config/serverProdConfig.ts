import { Env } from "../enum";

export const ServerProdConfig={
    Port:"3005",
    DBConnectionUrl:"mongodb://localhost:27017/nest",
    Env:Env.PRODUCTION,
}