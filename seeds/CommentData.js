const { Comment } = require('../models');

const commentdata = [
  {
    commentContent:"Thank You ",
    dateCreated: '2021-05-21 16:00:55',
    user_id: 1,
    post_id: 2,
    },
    {
      commentContent:`MVC is an acronym for Model-View-Controller. It is a design pattern for software projects. It is used majorly by Node developers and by C#, Ruby, 
      PHP framework users too. In MVC pattern, application and its development are divided into three interconnected parts.`,
      dateCreated: '2021-11-02 20:47:55',
    user_id: 2,
    post_id: 1,
        },

];

const seedComment= () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
