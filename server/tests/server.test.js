const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
	_id: new ObjectID(),
	text: 'First test todo'
},{
	_id: new ObjectID(),
	text: 'Second test todo',
	completed: true,
	completedAt: 300
}];

beforeEach((done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
});

describe('POST /todos', () => {
	it('Should create a new todo',(done) => {
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err,res) => {
				if(err){
					return done(err);
				}

				Todo.find({text}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			});
	});

	it('Should not create todo with invalid body data', (done) => {
		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err, res) => {
				if(err){
					return done(err);
				}
				Todo.find().then((todos) => {
					expect(todos.length).toBe(2);
					done();
				}).catch((e) => done(e));
			});

	});	
});



describe('GET /todos', () => {

	it('Should Get all todos', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done);
	});

	describe('GET /todos/:id',() => {

		it('Should Get todo with a valid id', (done) => {
			request(app)
				.get(`/todos/${todos[0]._id.toHexString()}`)
				.expect(200)
				.expect((res) => {
					expect(res.body.todos.text).toBe(todos[0].text);
				})
				.end(done);
		});

		it('Should return 404 if todo not found',(done) =>{
			var hexId = new ObjectID().toHexString();

			request(app)
				.get(`/todo/${hexId}`)
				.expect(404)
				.end(done);
		});

		it('Should return 404 for non object ids',(done) => {
			request(app)
				.get('/todo/123')
				.expect(404)
				.end(done);
		});

	});

});

describe('DELETE /todos:id', () => {

	it('Should Delete todo with a valid id', (done) => {

		request(app)
			.delete(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(todos[0].text);
			})
			.end((err,res) => {
				if(err){
					return done(err);
				}
				Todo.findById(todos[0]._id).then((todos) => {
					expect(null).toNotExist();
					done();
				}).catch((e) => done(e));
			});
	});

	it('Should return 404 if todo not found', (done) => {
		var hexId = new ObjectID().toHexString();
		request(app)
			.delete(`/todos/${hexId}`)
			.expect(404)
			.end(done);
	});

	it('Should return 404 for non object id', (done) => {
		request(app)
				.delete('/todo/123')
				.expect(404)
				.end(done);
	});
});

describe("PATCH /todos/:id", () => {

	it('Should update the todo', (done) => {
		var text = "Update text todo";
		var id = todos[0]._id.toHexString();
		var completed = true;

		request(app)
			.patch(`/todos/${id}`)
			.send({text,completed})
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(text);
				expect(res.body.todo.completed).toBe(true);
				expect(res.body.todo.completedAt).toBeA('number');
			})
			/*.end(done);*/
			.end((err, res) => {
				if(err){
					return done(err);
				}
				Todo.findById(id).then((todo) => {
					expect(todo.text).toBe(text);
					expect(todo.completed).toBe(true);
					expect(todo.completedAt).toBeA('number');
					done();
				}).catch((e) => done(e));
			});

	});

	it('Should clear completedAt when todo is not completed' , (done) => {
		var text = "Update text todo";
		var id = todos[1]._id.toHexString();
		var completed = false;

		request(app)
			.patch(`/todos/${id}`)
			.send({text,completed})
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(text);
				expect(res.body.todo.completed).toBe(false);
				expect(res.body.todo.completedAt).toNotExist();
			})
			.end(done);

	});
});