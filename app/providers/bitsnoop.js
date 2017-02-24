'use strict';

const BaseProvider = require('../core/provider.js');

class BitSnoopProvider extends BaseProvider {
    constructor() {
        super({
            name: 'BitSnoop',
            version: '0.0.1',
            type: 'torrent'
        });
    }
}

module.exports = BitSnoopProvider;
