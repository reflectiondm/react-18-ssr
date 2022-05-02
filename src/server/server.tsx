import fs from 'fs';
import express from 'express';
import crypto from 'crypto';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { collect } from '@linaria/server';
import App from '../app/app';
import Html from '../app/Html';
const app = express();

app.use('/static', express.static('./out/public'));

const css = fs.readFileSync('./out/public/index.css', 'utf-8');
const cssCache = {};

app.get('/styles/:slug', (req, res) => {
    res.type('text/css');

    res.end(cssCache[req.params.slug]);
});

app.get('/', (req, res) => {
    const app = renderToString(<App />);

    const { critical, other } = collect(app, css);

    const slug = crypto.createHash('md5').update(other).digest('hex');

    res.send(
        renderToString(
            <Html
                scripts={['static/index.js']}
                criticalCss={critical}
                styleHref={slug}
                title="test-task"
                appString={app}
            ></Html>
        )
    );
});

app.listen(3000, () => console.log(`app is listening on port 3000`));
