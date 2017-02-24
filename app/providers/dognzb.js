'use strict';

const BaseProvider = require('../core/provider.js');

class DogNzbProvider extends BaseProvider {
    constructor() {
        super({
            name: 'Dognzb',
            version: '0.0.1',
            type: 'nzb',
            enabled: true
        });
    }
}

module.exports = DogNzbProvider;
