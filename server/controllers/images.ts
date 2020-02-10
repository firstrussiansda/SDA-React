import fetch from 'node-fetch';
import { chunkArray } from '../lib';
import { Request, Response } from 'express';

const GET_IMAGES_URI = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
const DEFAULT_LIMIT = 12;

export async function imagesController(req: Request, res: Response) {
    const secret = process.env.INSTAGRAM_SECRET;

    if (!secret) {
        return res.status(500).send({ status: 500, data: [], reason: 'Missing required server config' });
    }

    const count = req.query.count || DEFAULT_LIMIT;
    const max_id = req.query.max_id || null;

    let uri = `${GET_IMAGES_URI}${secret}&count=${count}`;

    if (max_id) {
        uri += `&max_id=${max_id}`;
    }

    try {
        const response = await fetch(uri);
        const json = await response.json();

        if (!json.meta || json.meta.code !== 200) {
            // tslint:disable-next-line:no-console
            console.log('Error fetching images', 'URI:', uri, 'JSON:', json);

            return res.sendStatus(500);
        }

        res.send({
            data: chunkArray(json.data, 4),
            nextMaxId: json.pagination.next_max_id,
        });

    } catch (e) {
        // tslint:disable-next-line:no-console
        console.log('Error fetching images', e);
        return res.sendStatus(500);
    }
}
