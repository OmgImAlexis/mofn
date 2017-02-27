const opbeat = require('opbeat');

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'dev') {
    require('opbeat').start({
        appId: '7ffb55e62f',
        organizationId: '4dd2417bac324edabbababa48b497672',
        secretToken: '5f356314ec34bb4657ca00eb16b973996cfd11d0'
    });
}

// const Worker = require('webworker-threads').Worker;
const express = require('express');
const config = require('config');
const log = require('./app/core/log.js');
const providers = require('./app/providers');

for (let provider in providers) {
    console.dir(new providers[provider]());
}

// const b = new Worker('worker.js');

// const DogNzbProvider = require('./app/providers/dognzb.js');
// const BitSnoopProvider = require('./app/providers/bitsnoop.js');

var app = express();

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'dev') {
    app.use(opbeat.middleware.express());
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(config.port, () => {
    log.info(`Starting Mofn on http://localhost:${config.port}/`);
});
