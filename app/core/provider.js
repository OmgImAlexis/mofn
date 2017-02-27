'use strict';

class BaseProvider {
    constructor(options) {
        if (options) {
            this.name = options.name || 'Generic Provider';
            this.version = options.version || '0.0.1';
            this.enabled = options.enabled || false;
            this.public = options.public || false;
            this.url = options.url.replace(/\/?$/, '/') || '';
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

            // Make sure we append the base URL to other URLs if the bsase is provided
            if (options.urls) {
                for (let key in options.urls) {
                    if (!options.urls[key].startsWith('http')) {
                        options.urls[key] = options.url ? options.url + options.urls[key] : options.urls[key];
                    }
                }
                this.urls = options.urls;
            } else {
                this.urls = {};
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
