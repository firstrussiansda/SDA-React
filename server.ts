import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

const { nextI18next } = require('./i18n.ts');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    server.get('*', (req, res) => handle(req, res));

    await server.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
})();
