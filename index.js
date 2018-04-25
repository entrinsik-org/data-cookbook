'use strict';

exports.register = function (server, opts, next) {
    server.injector().inject(server.bundle('cookbook').scan(__dirname, 'public'));
    // server.app.hostpage.inject('Training').scan(__dirname, 'ui-plugin/public');
    // server.deployer('api').route(require('./routes'));
    // server.deployer('viz').route(require('./visuals'));

    // Adds guage to discover visuals
    // server.driver('visual-builder:discover', {
    //     isEligible: function (req) {
    //         return req.pre.fields.length > 0;
    //     },
    //     discover: function (req) {
    //         return {
    //             component: {
    //                 gauge: {
    //                     ext: 'json',
    //                     title: req.pre.fields[0].label,
    //                     dataset: req.pre.dataset.id
    //                 }
    //             }
    //         };
    //     }
    // });

    // server.drivers('flow', require('./flow'));

    server.drivers('scriptContext', {
        id: 'add',
        populate: function (ctx, qr) {
            ctx.add = function (n1, n2) {
                return n1 + n2;
            };

            return ctx;
        }
    });

    next();
};

exports.register.attributes = { name: 'cookbook' };