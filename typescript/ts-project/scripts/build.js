"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const glob_1 = __importDefault(require("glob"));
const esbuild_1 = require("esbuild");
function globToFiles(globStr) {
    return new Promise((resolve, reject) => {
        glob_1.default(globStr, {}, (err, files) => {
            if (err)
                reject(err);
            resolve(files);
        });
    });
}
async function build() {
    const distPath = path_1.default.resolve(__dirname, '..', 'dist');
    await fs_extra_1.default.remove(distPath);
    const entryPoints = await globToFiles('src/**/!(*.spec|*.test|*.d).ts');
    await esbuild_1.build({
        entryPoints,
        platform: 'node',
        minify: true,
        format: 'cjs',
        tsconfig: 'tsconfig.json',
        outdir: 'dist/src'
    });
}
build()
    .catch((e) => {
    console.error(e);
    process.exit(1);
});
