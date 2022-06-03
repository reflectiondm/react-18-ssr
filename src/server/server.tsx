import fs from 'fs';
import express from 'express';
import crypto from 'crypto';
import React from 'react';
import { renderToString, renderToPipeableStream } from 'react-dom/server';
import { collect } from '@linaria/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../app/App';
import Html from '../app/Html';
const app = express();

app.use('/static', express.static('./out/public'));

const css = fs.readFileSync('./out/public/index.css', 'utf-8');
const cssCache = {};

app.get('/styles/:slug', (req, res) => {
    res.type('text/css');

    res.end(cssCache[req.params.slug]);
});

app.get('*', (req, res) => {
    // const app = renderToString(
    //     <StaticRouter location={req.url}>
    //         <App />
    //     </StaticRouter>
    // );

    // const { critical, other } = collect(app, css);

    // let slug = null;
    // if (other) {
    //     slug = crypto.createHash('md5').update(other).digest('hex');

    //     cssCache[slug] = other;
    // }
    let didError = false;
    const stream = renderToPipeableStream(
        <Html scripts={['static/index.js']} criticalCss={''} styleHref={'static/index.css'} title="test-task">
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Html>,
        {
            onShellReady() {
                res.statusCode = didError ? 500 : 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            onError(err) {
                didError = true;
                console.error(err);
            },
        }
    );
});

app.listen(3000, () => console.log(`app is listening on port 3000`));
