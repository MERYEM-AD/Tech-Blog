const { Comment } = require('../models');

const commentdata = [
  {
    commentContent:"Awsome ",
    dateCreated: 'March 25, 2021 13:47:55',
    user_id: 1,
    post_id: 1,
    },
    {
      commentContent:" Wonderful ",
      dateCreated: 'May 02, 2021 10:30:12',
    user_id: 2,
    post_id: 2,
        },

];

const seedComment= () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
