'use strict';

module.exports = [
        { path: '/dcb/{type}/{id}/document.html', method: 'get', config: require('./cookbook-doc').get }
    ];