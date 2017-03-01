'use strict';

class BaseIndexer {
    constructor(options) {
        this.name = options.name || 'Generic Indexer';
        this.version = options.version || '0.0.1';
        this.enabled = options.enabled || false;
        this.url = options.url.replace(/\/?$/, '/') || '';
        this.supports = options.supports || [];
        this.language = options.language = 'Unknown';
        this.needsApiKey = options.needsApiKey || false;
    }
}

module.export = BaseIndexer;
