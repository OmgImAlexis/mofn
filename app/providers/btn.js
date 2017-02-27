'use strict';

const BaseProvider = require('../core/provider.js');

class BtnProvider extends BaseProvider {
    constructor() {
        super({
            name: 'BTN',
            version: '0.0.1',
            type: 'torrent',
            url: 'https://broadcasthe.net'
        });
    }
}

module.exports = BtnProvider;
