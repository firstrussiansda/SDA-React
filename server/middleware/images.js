const fetch = require('node-fetch');
const GET_IMAGES_URI = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
const DEFAULT_LIMIT = 12;

module.exports = async (req, res) => {
    const secret = process.env.INST_SECRET;
    if (!secret) {
        res.sendStatus(500);
    } else {
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
                res.sendStatus(500);

                // eslint-disable-next-line no-console
                console.log('Error fetching images', 'URI:', uri, 'JSON:', json);
            }
            res.send(json);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('Error fetching images', e);
        }
    }
};
