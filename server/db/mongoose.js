var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dudesum:dudesum998@ds257851.mlab.com:57851/todo-app'||'mongodb://localhost:27017/TodoApp');


module.exports = {
	mongoose
};