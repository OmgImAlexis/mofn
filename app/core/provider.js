'use strict';

const log = require('./log.js');

class BaseProvider {
    constructor(options) {
        log.info('RANDOM STUFF');
        if (options) {
            this.name = options.name || 'Generic Provider';
            this.version = options.version || '0.0.1';
            this.enabled = options.enabled || false;
            this.public = options.public || false;
            this.url = options.url || '';
            this.urls = options.urls || {};
            this.properStrings = options.properStrings || [];
            this.type = options.type || '';
            this.supports = options.supports || [];

            if (this.type === 'torrent') {
                this.minSeed = options.minSeed || 1;
                this.minLeech = options.minLeech || 1;
            }

            if ('show' in this.supports) {
                this.supportsBacklog = options.supportsBacklog || false;
            }
        } else {
            throw new Error('Missing parameter');
        }
    }

    search() {
        throw new Error('Not Implimented');
    }
}

module.exports = BaseProvider;
