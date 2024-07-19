'use strict';

var _web = require('./web.server');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webserver = new _web2.default();
webserver.start().then(function () {
    console.log('Webserver Started');
}).catch(function (err) {
    console.error(err);
    console.error('Failed to start web server');
});