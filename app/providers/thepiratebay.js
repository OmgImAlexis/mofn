'use strict';

const BaseProvider = require('../core/provider.js');

class ThePirateBayProvider extends BaseProvider {
    constructor() {
        super({
            name: 'ThePirateBay',
            version: '0.0.1',
            type: 'torrent',
            public: true,
            url: 'https://thepiratebay.org',
            urls: {
                rss: 'tv/latest',
                search: 'search/{string}/0/3/200'
            },
            minSeed: 0,
            minLeech: 0
        });
    }

    search() {

    }
}

module.exports = ThePirateBayProvider;
