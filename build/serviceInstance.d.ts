import IORedis from "ioredis";
import { IEntityMeta, ISchema } from "./types";
declare class ServiceInstance {
    private _entityMetas;
    private _entitySchemas;
    private _entitySchemasJsons;
    addEntity(target: object, entityMeta: IEntityMeta): void;
    addColumn(target: object, column: string, schema: ISchema): void;
    getConnectionConfig(target: object): any;
    getEntityMeta(target: object): IEntityMeta;
    getTable(target: object): string;
    getConnection(target: object): string;
    getPrimaryKeys(target: object): string[];
    getAutoIncrementKey(target: object): string;
    getIndexKeys(target: object): string[];
    getUniqueKeys(target: object): string[];
    getSchemas(target: object): {
        [key: string]: ISchema;
    };
    getSchemasJson(target: object): string;
    getSchema(target: object, column: string): ISchema;
    getColumns(target: object): string[];
    convertAsEntityId(target: object, idObject: {
        [key: string]: any;
    } | string | number): string | undefined;
    isIndexKey(target: object, column: string): boolean;
    isValidColumn(target: object, column: string): boolean;
    isSearchableColumn(target: object, column: string): boolean;
    isUniqueKey(target: object, column: string): boolean;
    isPrimaryKey(target: object, column: string): boolean;
    isSortableColumn(target: object, column: string): boolean;
    isNumberColumn(target: object, column: string): boolean;
    isDateColumn(target: object, column: string): boolean;
    getRedis(target: object, registerRedis?: boolean): Promise<IORedis.Redis>;
    compareSchemas(target: object): Promise<string[]>;
    getRemoteSchemas(target: object, redis: IORedis.Redis): Promise<{
        [key: string]: ISchema;
    } | null>;
    resyncDb(target: object): Promise<void>;
    getEntityStorageKey(target: object, entityId: string): string;
    getIndexStorageKey(target: object, column: string): string;
    getUniqueStorageKey(target: object, column: string): string;
    getMetaStorageKey(target: object): string;
    private _registerRedis;
    private _registerLau;
    private _validateSchemas;
    private _openFile;
}
export declare const serviceInstance: ServiceInstance;
export declare function schemaJsonReplacer(key: any, value: any): any;
export {};