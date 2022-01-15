const { Comment } = require('../models');

const commentdata = [
  {
    commentContent:"Thank You ",
    dateCreated: 'March 25, 2021 13:47:55',
    user_id: 1,
    post_id: 2,
    },
    {
      commentContent:`MVC is an acronym for Model-View-Controller. It is a design pattern for software projects. It is used majorly by Node developers and by C#, Ruby, 
      PHP framework users too. In MVC pattern, application and its development are divided into three interconnected parts.`,
      dateCreated: 'May 02, 2021 10:30:12',
    user_id: 2,
    post_id: 1,
        },

];

const seedComment= () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
