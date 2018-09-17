const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

/*bcrypt.genSalt(12, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});*/

var hashedPassword1 = '$2a$12$eEZFLQEynfzFnRA3uHcakOb73x9WuQBBBFnLaALuUgxr2iY2ywX3q';
var hashedPassword2 = '$2a$12$P5cee0zMJhESyad.q.0X2ORD1Ud8HVz2lvJyrpp.8lOowVW7U.rOi';

bcrypt.compare(password, hashedPassword1 , (err, res) => {
	console.log(res);
});
bcrypt.compare(password, hashedPassword2 , (err, res) => {
	console.log(res);
});
/*var data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('Decoded', decoded);*/

/*var message = 'I am user number 6';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
	id : 4
};
var token = {
	data,
	hash: SHA256(JSON.stringify(data)+'somesecret').toString()
};

var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

if(resultHash === token.hash){
	console.log('Data was not Changed');
}
else{
	console.log('Data was Changed. Do not Trust !!');
}*/