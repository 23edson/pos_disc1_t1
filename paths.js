const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./build";

//define the paths in the tsconfig that can be used to resolve modules without using import path/to/
tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
});