// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to mongo db server');
	}
	console.log('Connected to MongoDB server');
/*
	db.collection('Todos').find({_id: new ObjectID('5b58cd9cd4c37b0fe4a0a3f5')}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch the Todos ', err);
	});*/


	db.collection('Users').find({name: 'Avinash'}).count().then((count) => {
		console.log(`Todos count: ${count}`);
	},(err) => {
		console.log('Unable to fetch the Todos ', err);
	});

	db.close();
});
