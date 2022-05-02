import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/app';
import Html from '../app/Html';
const app = express();

app.use('/static', express.static('./out/public'));

app.get('/', (req, res) => {
    const app = renderToString(
        <Html scripts={['static/index.js']} title="test-task">
            <App />
        </Html>
    );

    res.send(app);
});

app.listen(3000, () => console.log(`app is listening on port 3000`));
