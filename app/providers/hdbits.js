'use strict';

const BaseProvider = require('../core/provider.js');
const Errors = require('../core/errors.js');

class DogNzbProvider extends BaseProvider {
    constructor() {
        super();
        this.name = 'Dognzb';
        this.version = '0.0.1';
    }

    search() {
        throw Errors.NotImplimented;
    }
}

module.exports = DogNzbProvider;
