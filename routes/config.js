'use strict';

const _ = require('lodash');

exports.get = {
    handler: function (req, reply) {
        const SystemFeature = req.model('SystemFeature');
        SystemFeature.findById('cookbook', { attributes: ['data'] })
            .then(f => reply.view('config', { key: _.get(f, 'data.host') }))
            .catch(reply);
    }
};