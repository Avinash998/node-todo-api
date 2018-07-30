const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//To Remove all
/*Todo.remove({}).then((result) => {
	console.log(result);
});*/

//Find one and remove
Todo.findOneAndRemove({_id: "5b5f41739dfdcf44194d431f"}).then((todo) => {
	console.log(todo);
});

//find by id and remove
/*Todo.findByIdAndRemove(ObjectID('5b5f31939dfdcf44194d4141')).then((todo) => {
	console.log(todo);
});*/