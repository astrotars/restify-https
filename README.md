restify-https
=============

A simple Restify plugin that requires requests to be made via HTTPS only.

Example:

```
var server = require('restiry'),
    https = require('restify-https');

server.use(https({ override: false }));
```

For more information using custom plugins, please refer to the [Restify docs](http://mcavage.me/node-restify/).
