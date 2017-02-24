require('opbeat').start({
    appId: '7ffb55e62f',
    organizationId: '4dd2417bac324edabbababa48b497672',
    secretToken: '5f356314ec34bb4657ca00eb16b973996cfd11d0'
});

const fs = require('fs');
const path = require('path');

fs.mkdir(path.resolve(__dirname, './logs'), '0744', function(err) {
    if (err) {
        if (err.code !== 'EEXIST') { // ignore the error if the folder already exists
            throw new Error('Can\'t create log dir');
        }
    }
});

const DogNzbProvider = require('./app/providers/dognzb.js');
const BitSnoopProvider = require('./app/providers/bitsnoop.js');
// const DogNzbProvider = require('./app/providers/dognzb.js');
// const DogNzbProvider = require('./app/providers/dognzb.js');
// const DogNzbProvider = require('./app/providers/dognzb.js');

var dognzbd = new DogNzbProvider();
var bitsnoop = new BitSnoopProvider();

console.log(dognzbd);
console.log(bitsnoop);

// dognzbd.search();
// bitsnoop.search();

// app.use(opbeat.middleware.express())
