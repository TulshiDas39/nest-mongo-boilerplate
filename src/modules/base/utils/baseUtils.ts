import { Base } from "../typing";

export class BaseUtil{
    static getBaseSchemaProperty():Base{
        return {
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    }
}