import dbClient from '../utils/db';

class CommentController {
  static async postComment (request, response) {
    const { idStory, comment } = request.body;
    if (!idStory || !comment) {
      response.status(400).json({ error: 'Please put a comment' });
    } else {
      const story = await dbClient.getOneStory(idStory);
      if (story) {
        story.comments.push(comment);
        const newComments = story.comments;
        const query = { _id: new require('mongodb').ObjectId(idStory) };
        const newValues = { $set: { comments: newComments } };
        await dbClient.updateDoc(query, newValues);
        response.status(201).json(newComments).end();
      } else {
        response.status(404).json({ error: 'story not found' }).end();
      }
    }
  }

  static async getComments (request, response) {
    const { id } = request.params;
    const story = await dbClient.getOneStory(id);
    if (story) {
      response.status(200).json(story.comments).end();
    } else {
      response.status(404).json({ error: 'story not found' }).end();
    }
  }
}

module.exports = CommentController;
