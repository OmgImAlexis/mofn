const path = require('path');

require('fs').readdirSync(path.join(__dirname, '/')).forEach(function(file) {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
        var name = file.replace('.js', '');
        exports[name] = require('./' + file); // eslint-disable-line import/no-dynamic-require
    }
});
