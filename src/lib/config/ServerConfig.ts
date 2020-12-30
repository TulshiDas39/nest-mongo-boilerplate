import { ServerDevConfig,ServerProdConfig} from ".";
import { Env } from "../enum";
import { ServerCommonConfig } from "./serverCommonConfig";

const EnvSpecificConfig = process.env.NODE_ENV === Env.DEVELOPMENT?ServerDevConfig:ServerProdConfig;
export const ServerConfig = {...ServerCommonConfig,...EnvSpecificConfig};
