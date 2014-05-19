'use strict';

var url = require('url');

module.exports = function (opts) {

    opts = opts || {};

    var https = function(req, res, next) {

        if (process.ENV.NODE_ENV == 'DEV' || opts.override) {
            return next();
        }

        if (req.headers['x-forwarded-proto'] != 'https') {
            return next(new restify.NotAuthorizedError('An HTTPS connection is required to request this resource.'));
        }

        return next();

    };

    return (https);

};
