var mongoose = require('mongoose');

/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dudesum:dudesum998@ds257851.mlab.com:57851/todo-app'||process.env.MONGOLAB_URI||'mongodb://localhost:27017/TodoApp');
*/


var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(process.env.PROD_MONGODB||, options);


module.exports = {
	mongoose
};
