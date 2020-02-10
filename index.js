const { setConfig } = require('next/config');
setConfig(require('./next.config'));

require('./dist/server/index');
