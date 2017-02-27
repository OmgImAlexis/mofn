const fs = require('fs');
const path = require('path');
const junk = require('junk');
const sceneRelease = require('scene-release');
const log = require('../log.js');

const walk = function(currentDirPath, callback) {
    fs.readdir(currentDirPath, function(err, files) {
        if (err) {
            throw new Error(err);
        }
        files.filter(junk.not).forEach(function(name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walk(filePath, callback);
            }
        });
    });
};

walk('/Users/xo/fakeDownloads/', function(filePath) {
    // log.info(filePath);
    let fileName = filePath.split('/').pop();
    log.info(fileName, sceneRelease(fileName));
});
