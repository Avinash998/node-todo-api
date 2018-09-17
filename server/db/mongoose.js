console.log('Inside server/db/mongoose.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

module.exports = {
	mongoose
};
