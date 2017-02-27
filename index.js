#!/usr/bin/env node
// const Worker = require('webworker-threads').Worker;
const express = require('express');
const config = require('config');
const argv = require('yargs').alias('v', 'verbose').alias('h', 'help').alias('d', 'debug').argv;
const getUsage = require('command-line-usage');
const log = require('./app/core/log.js');

const mode = (argv.debug || process.env.NODE_ENV !== 'production') ? 'debug' : 'production';

if (mode === 'debug') {
    log.transports.console.level = 'debug';
    log.transports.file.level = 'debug';
} else {
    log.transports.console.level = 'info';
    log.transports.file.level = 'info';
}

if (argv.help) {
    const sections = [{
        header: 'Mofn',
        content: 'A media manager'
    }, {
        header: 'Options',
        optionList: [{
            name: 'debug',
            alias: 'd',
            description: 'Turns on debug loging.'
        }, {
            name: 'verbose',
            alias: 'v',
            description: 'Turns on verbose loging.'
        }, {
            name: 'help',
            alias: 'h',
            description: 'Print this usage guide.'
        }]
    }];

    const usage = getUsage(sections);
    console.log(usage);
    process.exit();
}

var app = express();

app.set('providers', require('./app/providers'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(config.port, () => {
    log.info(`Starting Mofn in ${mode} mode on http://localhost:${config.port}/`);
});
