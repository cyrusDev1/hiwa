import dbClient from '../utils/db';
import { createHash } from 'crypto';
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'hiwa2023';

const hashPass = (password) => createHash('sha1').update(password).digest('hex');

class UsersController {
  static async register (request, response) {
    const { username, email, password } = request.body;
    if (!username || !email || !password) {
      response.status(400).json({ error: 'Please fill in all fields' }).end();
    } else {
      if (!await dbClient.checkUsername(username)) {
        if (!await dbClient.checkEmail(email)) {
          const insert = await dbClient.createUser(username, email, hashPass(password));
          const newUser = { id: insert.ops[0]._id, username, email };
          response.status(201).json(newUser).end();
        } else {
          response.status(400).json({ error: 'Email already exist' }).end();
        }
      } else {
        response.status(400).json({ error: 'Username already exist' }).end();
      }
    }
  }

  static async login (request, response) {
    const { email, password } = request.body;
    if (!email || !password) {
      response.status(400).json({ error: 'Please fill in all fields' }).end();
    } else {
      const user = await dbClient.getUser(email, hashPass(password));
      if (user) {
        const token = jwt.sign({ username: user.username }, SECRET);
        response.json({ token });
      } else {
        response.status(404).json({ error: 'Email or password is incorrect' });
      }
    }
  }
}

module.exports = UsersController;
