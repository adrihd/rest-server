const bluebird = require('bluebird');
if (global.Promise !== bluebird) {
  Promise = global.Promise = require('bluebird');
}
const Logger = require('./utils/Logger');
Logger.info('STARTED');
const { port, env } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => Logger.info(`server started on port ${port} (${env})`)
// console.info(`server started on port ${port} (${env})`)
);

/**
* Exports express
* @public
*/
module.exports = app;
