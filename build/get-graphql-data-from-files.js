"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
require("graphql-import-node");
const schema_merging_1 = require("@graphql-toolkit/schema-merging");
function requireAll(dir, filter = () => {
    return true;
}) {
    const modules = [];
    const files = fs_1.default.readdirSync(dir);
    for (const fileName of files) {
        const filePath = dir + '/' + fileName;
        if (fs_1.default.statSync(filePath).isDirectory()) {
            modules.push(...requireAll(filePath, filter));
        }
        else {
            if (filter(fileName)) {
                modules.push(require(filePath));
            }
        }
    }
    return modules;
}
exports.requireAll = requireAll;
function getGraphqlsFromFile(dir, filter = () => {
    return true;
}) {
    const results = requireAll(dir, (fileName) => {
        const splitedFileName = fileName.split('.');
        if (splitedFileName[splitedFileName.length - 1] === 'graphql' &&
            filter(fileName)) {
            return true;
        }
        return false;
    });
    return schema_merging_1.mergeTypeDefs(results);
}
exports.getGraphqlsFromFile = getGraphqlsFromFile;
function getResolversFromFile(dir, filter = () => {
    return true;
}) {
    const resolversBeforePreProcessing = requireAll(dir, (fileName) => {
        const splitedFileName = fileName.split('.');
        if (splitedFileName[splitedFileName.length - 2] === 'resolvers' &&
            filter(fileName)) {
            return true;
        }
        return false;
    });
    const resolvers = [];
    for (const resolver of resolversBeforePreProcessing) {
        resolvers.push(resolver.default);
    }
    return resolvers;
}
exports.getResolversFromFile = getResolversFromFile;
