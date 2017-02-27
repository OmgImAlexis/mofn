'use strict';

class Errors {
    NotImplimented() {
        return new Error('Not implimented');
    }
    HTTP_500() {
        return new Error('500 Internal Server Error');
    }
    HTTP_404() {
        return new Error('404 Page Not Found');
    }
}

module.exports = Errors;
