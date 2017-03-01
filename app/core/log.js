const path = require('path');
const git = require('git-rev-sync');
const winston = require('winston');

const web = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter(options) {
                let commitHash = git.short(path.resolve(__dirname, '../'));
                let now = new Date();
                let timestamp = `${now.toLocaleDateString()} ${now.toTimeString()}`;
                let meta = ' ' + (options.meta.length ? options.meta.toString() === '[object Object]' ? JSON.stringify(options.meta) : options.meta : '');
                return `[${timestamp}] [${options.level.toUpperCase()}] [${commitHash}] [WEB] ${options.message}${meta}`;
            }
        }),
        new (winston.transports.File)({
            filename: path.resolve(__dirname, '../../logs/application.log')
        })
    ]
});

const postProcess = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter(options) {
                let commitHash = git.short(path.resolve(__dirname, '../'));
                let now = new Date();
                let timestamp = `${now.toLocaleDateString()} ${now.toTimeString()}`;
                let meta = ' ' + (options.meta.length ? options.meta.toString() === '[object Object]' ? JSON.stringify(options.meta) : options.meta : '');
                return `[${timestamp}] [${options.level.toUpperCase()}] [${commitHash}] [POST-PROCESS] ${options.message}${meta}`;
            }
        }),
        new (winston.transports.File)({
            filename: path.resolve(__dirname, '../../logs/application.log')
        })
    ]
});

module.exports = {
    web,
    postProcess
};
