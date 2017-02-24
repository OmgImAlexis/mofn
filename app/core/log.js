const path = require('path');
const git = require('git-rev-sync');
const winston = require('winston');

const log = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter(options) {
                let commitHash = git.short(path.resolve(__dirname, '../'));
                let now = new Date();
                let timestamp = `${now.toLocaleDateString()} ${now.toTimeString()}`;
                return `[${timestamp}] [${options.level.toUpperCase()}] [${commitHash}] ${options.message}`;
            }
        }),
        new (winston.transports.File)({
            filename: path.resolve(__dirname, '../logs/application.log')
        })
    ]
});

module.exports = log;
