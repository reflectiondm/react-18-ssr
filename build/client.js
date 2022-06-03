const linaria = require('@linaria/esbuild').default;
const fs = require('fs');
const build = async () => {
    const result = await require('esbuild').build({
        entryPoints: ['./src/client/index.tsx'],
        bundle: true,
        platform: 'browser',
        watch: true,
        sourcemap: true,
        minify: true,
        bundle: true,
        outdir: './out/public',
        splitting: true,
        format: 'esm',
        metafile: true,
        plugins: [
            linaria({
                sourcemap: true,
            }),
        ],
    });

    fs.writeFile('./metafile.json', JSON.stringify(result.metafile), {}, () => {});
};

build();
