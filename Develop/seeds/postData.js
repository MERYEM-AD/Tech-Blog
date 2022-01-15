const { Post } = require('../models');

const PostData = [
  {
    title: 'I have question about MVC (node JS)',
    content: `Hi , Please could anyone tell me  What is MVC Nodejs? ,thank You`,
    user_id:1
  },
  {
    title: 'Is express an MVC?',
    content: `Express is just a framework to run your web server on top of node. js. It's up to you as the owner of the application if you wish to structure your code in Mode, Controller manner. ... 
    And if they use MVC style, they'd get MVC application.`,
    creating_date: 'September 22, 2021 22:00:00',
    user_id:1
  },
  {
    title: 'Q: What is npm for?',
    content: `A : npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.`,
    creating_date: 'December 21, 2021 20:30:00',
    user_id:2
  },
];

const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;
