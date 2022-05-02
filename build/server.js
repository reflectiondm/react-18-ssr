const { fork } = require('child_process');
const linaria = require('@linaria/esbuild').default;
let abortController;
let child;

function startServer() {
    console.log(`starting the server`);
    try {
        abortController = new AbortController();
        const { signal } = abortController;
        child = fork('./out/server/server.js', [], { signal });

        child.on('error', err => console.log('SERVER', err));
    } catch (err) {
        console.log(err);
    }
}

require('esbuild')
    .build({
        entryPoints: ['./src/server/server.tsx'],
        bundle: true,
        platform: 'node',
        external: ['./node_modules/*'],
        watch: {
            onRebuild: (error, _) => {
                abortController.abort();
                if (error) {
                    console.log('watch build failed: ', error);
                } else {
                    console.log('watch build succeed');
                    startServer();
                }
            },
        },
        outdir: './out/server',
        plugins: [
            linaria({
                sourcemap: true,
            }),
        ],
    })
    .then(res => {
        console.log(`built: ${JSON.stringify(res)}`);
        startServer();
    })
    .catch(() => process.exit(1));
