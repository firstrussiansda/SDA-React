import express from 'express';
import next from 'next';

import { imagesController } from './controllers/images';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use(express.json()); // for parsing application/json
    server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    server.get('/api/images', imagesController);

    server.get('*', (req, res) => handle(req, res));

    await server.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);

    // tslint:disable-next-line:no-console
    console.log('API_SITE_URL ON START', process.env.API_SITE_URL);
})();
