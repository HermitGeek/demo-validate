const ensureService = require('esbuild')

console.log(ensureService);
// const esbuildService = ensureService()


ensureService.build({
    entryPoints: ['./source.js'],
    bundle: true,
    keepNames: true,
    format: 'esm',
    logLevel: 'error',
    splitting: true,
    sourcemap: true,
    outdir: './target-directory',
    metafile: false,
    treeShaking: 'ignore-annotations',
    loader: {
        '.png': 'file',
        '.svg': 'text',
      },
})