import dbClient from '../utils/db';

class PostController {
  static async postStory (request, response) {
    const { idUser, title, content, type, commentStat } = request.body;
    if (!idUser || !title || !content || !type || !commentStat) {
      response.status(400).json({ error: 'Please fill all felds' }).end();
    } else {
      request.body.datePost = new Date(Date.now()).toLocaleString();
      const insert = await dbClient.createStory(request.body);
      response.status(201).json(insert.ops[0]).end();
    }
  }

  static async getStories (request, response) {
    const stories = await dbClient.getAllStories();
    response.status(200).json(stories).end();
  }
}

module.exports = PostController;
