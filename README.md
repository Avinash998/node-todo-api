# node-todo-api ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Node-todo-api is a node project for creating todo lists. It supports multiple user login with authentication and token system. It stores user data in mongo enviroment. Well unit test cases written to possibly covers all the possible test cases. Devloped in node.js.

## Installation

### Requirements
* Node 8 or latest
* npm 6 or latest
* mongodb

intstall mongoDb
`$ cd to_your_folder`

`$ git clone https://github.com/Avinash998/node-todo-api.git`

`$ npm install`
### Enviroment Setup
create a file inside server/config/config.json
```javascript
{
	"development": {
		"PORT": 3000,
		"MONGODB_URI": "mongodb://localhost:27017/TodoApp",
		"JWT_SECRET": "your_secret_key"
	},
	"test": {
		"PORT": 3000,
		"MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
		"JWT_SECRET": "your_secret_key"
	}
}
```

## Usage

```javascript
//to start test server 
npm test
// To start the server
npm start

```
open webbrowser and type url 'localhost:3000'
and its ready to go, and explore

## Deployment
click link for the project url [https://fierce-shelf-96857.herokuapp.com/](https://aqueous-hollows-94087.herokuapp.com/)

## NPM Packages
# Dependencies
* bcryptjs   //for hashing user crediantials
* body-parser  // for parsing data
* crypto-js  // generating SHA-256
* express  //routing
* jsonwebtoken  // generating tokens
* lodash  //utility
* mongodb  // database connection
* mongoose  // schema and query database
* validator  //  validating credentials
# devDependencies
* expect
* mocha
* nodemon
* supertest

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
