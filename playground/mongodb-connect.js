// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

/*var user =[{
	name: 'Avinash',
	age: 25
},{
	name: 'Avinash_c',
	age: 25
}];
var {name} = user[1];
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to mongo db server');
	}
	console.log('Connected to MongoDB server');

/*	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	},(err, result) => {
		if(err){
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(result.ops , undefined ,2));	
	});*/

/*	db.collection('Users').insertOne({
		name: 'Avinash',
		age: 25,
		location: 'Andal'
	},(err, result) => {
		if(err){
			return console.log('Unable to insert Users', err);
		}

		// console.log(JSON.stringify(result.ops, undefined ,2));

		console.log(result.ops[0]._id.getTimestamp());
	});*/

	db.close();
});
