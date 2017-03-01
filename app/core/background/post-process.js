const walk = require('walk-promise');
const junk = require('junk');
// const sceneRelease = require('scene-release');
const log = require('../log.js').postProcess;

process.on('message', function(message) {
    log.info('Processing ' + message.path);
    walk(message.path).then(files => {
        return files.filter(file => {
            if (junk.is(file.name)) {
                log.info('Removing ' + file.name + ' as it\'s a junk file');
            } else {
                log.info('Keeping ' + file.name + ' as it\'s not junk file');
            }
            return junk.not(file.name);
        });
    }).then(files => {
        process.send({
            id: message.id,
            data: {
                files
            }
        });
    });
});
