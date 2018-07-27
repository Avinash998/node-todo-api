const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5b5b4dec665ccd7c0e870a18';

if(!ObjectID.isValid(id)){
	console.log('Id not valid');
}*/


/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos ',todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo ',todo);
});
*/
/*Todo.findById(id).then((todo) => {

	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo_FindById ',todo);
}).catch((e) => console.log(e));
*/

//User FindById

var id_user = '5b59f403c68dba2023699e44';

if(!ObjectID.isValid(id_user)){
	console.log('User ID is not valid');
}

User.findById(id_user).then((user) => {
	if(!user){
		return console.log('User id doesn\'t Exists');
	}
	console.log('User_findById ',user);
}).catch((e) => console.log(e));
