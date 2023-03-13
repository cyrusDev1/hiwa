import { MongoClient } from 'mongodb';
import { env } from 'process';
const ObjectId = require('mongodb').ObjectId; 

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
    return users.findOne({ $and: [{ email }, { password }] });
  }

  async createStory (story) {
    this.myDB = this.client.db();
    const stories = this.myDB.collection('stories');
    return stories.insertOne(story);
  }

  async getAllStories () {
    this.myDB = this.client.db();
    const stories = this.myDB.collection('stories').find().toArray();
    return stories;
  }

  async getOneStory(id){
    this.myDB = this.client.db()
    const story = this.myDB.collection('stories').findOne({_id: new ObjectId(id)})
    return story;
  }

  async updateDoc(query, newValues){
    this.myDB = this.client.db();
    this.myDB.collection('stories').updateOne(query, newValues)
  }

}

const dbClient = new DBClient();
export default dbClient;
