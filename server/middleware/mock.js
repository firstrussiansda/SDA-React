module.exports = (req, res) => {
    const availableTypes = ['events', 'sermons'];
    const availableLanguages = ['en', 'ru', 'uk'];
    const { language, type } = req.params;

    if (!availableTypes.includes(type) || !availableLanguages.includes(language)) {
        res.sendStatus(400);

    } else {
        try {
            const data = require(`../mockData/${type}/${language}.json`);
            res.set({
                "Content-Language": language,
                "Content-Type": "application/json",
            });
            res.send(JSON.stringify(data));
            return;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log("ERROR WHILE LOADING THE FILE:", e);
            res.sendStatus(404);
        }
    }
};
