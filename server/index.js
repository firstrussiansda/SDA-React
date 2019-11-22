const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('../i18n');

const imagesHandler = require('./middleware/images');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    server.use(express.json()); // for parsing application/json
    server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    server.get('/api/images', imagesHandler);

    server.get('*', (req, res) => handle(req, res));

    await server.listen(port);
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
    console.log('API_SITE_URL', process.env.API_SITE_URL);
})();
