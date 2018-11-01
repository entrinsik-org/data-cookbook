'use strict';

exports.assets = function () {
    return [
        { path: '/cookbook/config.js', method: 'get', config: require('./config').get }
    ];
};