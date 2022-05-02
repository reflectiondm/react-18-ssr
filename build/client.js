require('esbuild').build({
    entryPoints: ['./src/client/index.tsx'],
    bundle: true,
    platform: 'browser',
    watch: true,
    sourcemap: true,
    minify: true,
    bundle: true,
    outdir: './out/public'
});