import { MongoClient } from 'mongodb';
import { env } from 'process';

class DBClient {
  constructor () {
    const host = env.HOST || 'localhost';
    const port = env.PORT || '27017';
    const dbName = env.dbName || 'hiwa_db';
    const url = `mongodb://${host}:${port}/${dbName}`;
    this.client = MongoClient(url);
    this.client.connect();
  }

  isAlive () {
    return this.client.isConnected();
  }

  async checkUsername (username) {
    this.myDB = this.client.db();
    const users = this.myDB.collection('users');
    return users.findOne({ username });
  }

  async checkEmail (email) {
    this.myDB = this.client.db();
    const users = this.myDB.collection('users');
    return users.findOne({ email });
  }

  async createUser (username, email, password) {
    this.myDB = this.client.db();
    const users = this.myDB.collection('users');
    return users.insertOne({ username, email, password });
  }

  async getUser (email, password) {
    this.myDB = this.client.db();
    const users = this.myDB.collection('users');
    return users.findOne({ email, password });
  }
}

const dbClient = new DBClient();
export default dbClient;
