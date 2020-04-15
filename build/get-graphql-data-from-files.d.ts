import 'graphql-import-node';
import { DocumentNode } from 'graphql';
import { IResolvers } from 'graphql-tools';
export declare function requireAll<T>(dir: string): T[];
export declare function requireAll<T>(dir: string, filter: (fileName: string) => boolean): T[];
export declare function getGraphqlsFromFile(dir: string): DocumentNode;
export declare function getGraphqlsFromFile(dir: string, filter: (fileName: string) => boolean): DocumentNode;
export declare function getResolversFromFile(dir: string): IResolvers[];
export declare function getResolversFromFile(dir: string, filter: (fileName: string) => boolean): IResolvers[];
