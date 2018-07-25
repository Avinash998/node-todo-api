// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to mongo db server');
	}
	console.log('Connected to MongoDB server');

	/*db.collection('Todos').findOneAndUpdate({
		_id : new ObjectID("5b58e99383d66294e7f5ddc0")
	},{
		$set: {
			completed: true
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		name: 'Avinash'
	},{
		$set: {
			name: 'Chourasia'
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.close();
});
