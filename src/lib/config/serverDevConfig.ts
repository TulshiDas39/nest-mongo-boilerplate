import { Env } from "../enum";

export const ServerDevConfig={
    Port:"3000",
    DBConnectionUrl:"mongodb://localhost:27017/nest",
    Env:Env.DEVELOPMENT,
}