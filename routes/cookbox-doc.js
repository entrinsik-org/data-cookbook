'use strict';

const joi = require('joi');

exports.get = {
    handler: {
        proxy: {
            mapUri: r => {
                return 'www.cnn.com'
            }
        }
    },
    validate: {
        params: {
            type: joi.string(),
            id: joi.string()
        }
    },
    plugins: {
        hal: {
            api: 'dcb:document'
        }
    }
};