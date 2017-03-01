#!/usr/bin/env node
const path = require('path');
const childProcess = require('child_process');
const split = require('split');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');
const argv = require('yargs').alias('v', 'verbose').alias('h', 'help').alias('d', 'debug').argv;
const getUsage = require('command-line-usage');
const log = require('./app/core/log.js').web;

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

const child = childProcess.fork('./app/core/background/post-process.js');
var taskId = 0;
var tasks = {};

function postProcess(path, callback) {
    var id = taskId++;

    child.send({id: id, path: path});

    tasks[id] = callback;
}

child.on('message', function(message) {
    // Look up the callback bound to this id and invoke it with the result
    tasks[message.id](message.data);
});

var app = express();

// Info
app.use(morgan(':method :url :status - :response-time ms', {
    skip: (req, res) => {
        return res.statusCode >= 400;
    }, stream: split().on('data', data => log.info(data))
}));
// Errors
app.use(morgan(':method :url :status - :response-time ms', {
    skip: (req, res) => {
        return res.statusCode < 400;
    }, stream: split().on('data', data => log.error(data))
}));

app.set('providers', require('./app/providers'));

// assets. Static JS, CSS, fonts
app.use('/', express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.post('/pp', (req, res) => {
    return postProcess(res.body.path, function(result) {
        return res.send(result);
    });
});

app.listen(config.port, () => {
    log.info(`Starting Mofn in ${mode} mode on http://localhost:${config.port}/`);
});
