'use strict';

exports.register = function (server, opts, next) {
    server.injector().inject(server.bundle('cookbook').scan(__dirname, 'public'));


    server.driver('systemFeature', {
        id: 'cookbook',
        name: 'Data Cookbook',
        editorComponent: 'datacookbookFeature',
        description: 'Connects Data Cookbook to Informer, after providing the Data Cookbook URL',
        refreshOnInstall: true,
        isEligible: function () {
            return true;
        }
    });

    server.deployer('api').route(require('./routes'));

    next();
};

exports.register.attributes = { name: 'cookbook' };