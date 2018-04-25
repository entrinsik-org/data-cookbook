'use strict';

exports.register = function (server, opts, next) {
    server.injector().inject(server.bundle('cookbook').scan(__dirname, 'public'));
    next();
};

exports.register.attributes = { name: 'cookbook' };
