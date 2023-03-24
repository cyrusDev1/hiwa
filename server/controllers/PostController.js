import dbClient from '../utils/db';

class PostController {
  static async postStory (request, response) {
    const { title, content, type, commentStat } = request.body;
    if (!title || !content || !type || !commentStat) {
      response.status(400).json({ error: 'Please fill all felds' }).end();
    } else {
      request.body.datePost = new Date(Date.now()).toLocaleString();
      const user = await dbClient.checkUsername(request.user.username);
      request.body.idUser = user._id;

      const insert = await dbClient.createStory(request.body);
      response.status(201).json(insert.ops[0]).end();
    }
  }

  static async getStories (request, response) {
    const stories = await dbClient.getAllStories();
    response.status(200).json(stories).end();
  }

  static async getStory (request, response) {
    const { id } = request.params;
    const story = await dbClient.getOneStory(id);
    const query = { _id: new require('mongodb').ObjectId(id) };
    const newValues = { $set: { views: story.views += 1 } };
    await dbClient.updateDoc(query, newValues);
    if (story) {
      response.status(200).json(story).end();
    } else {
      response.status(404).json({ error: 'story not found' }).end();
    }
  }

  static async getMyStories (request, response) {
    const user = await dbClient.checkUsername(request.user.username);
    const story = await dbClient.getMyStories(user._id);
    response.status(200).json(story).end();
  }
}

module.exports = PostController;
