restify-https
=============

A dead simple Restify plugin that requires requests to be made via HTTPS only.

Example:

```
// require module dependencies
var server = require('restiry'),
    https = require('restify-https');

// initialize restify https plugin
server.use(https({ override: false }));
```

For more information using custom plugins, please refer to the [Restify docs](http://mcavage.me/node-restify/).
