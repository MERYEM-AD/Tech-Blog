const { Comment } = require('../models');

const commentdata = [
  {
    commentContent:"Awsome ",
    user_id: 1,
    post_id: 1,
    },
    {
      commentContent:" Wonderful ",
    user_id: 2,
    post_id: 2,
        },

];

const seedComment= () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
