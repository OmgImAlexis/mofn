'use strict';

const BaseProvider = require('../core/provider.js');

class ExtraTorrentProvider extends BaseProvider {
    constructor() {
        super({
            name: 'Extra Torrent',
            version: '0.0.1',
            type: 'torrent',
            public: true,
            url: 'http://extratorrent.cc',
            properStrings: ['PROPER', 'REPACK', 'REAL']
        });
    }
}

module.exports = ExtraTorrentProvider;
