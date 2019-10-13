module.exports = {
    chunkArray: function (array, chunk_size) {
        const results = [];

        while (array.length) {
            results.push(array.splice(0, chunk_size));
        }

        return results;
    },
};
