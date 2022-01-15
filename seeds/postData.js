const { Post } = require('../models');

const PostData = [
  {
    title: 'I have question about MVC (node JS)',
    content: `Hi , Please could anyone tell me  What is MVC Nodejs? ,thank You`,
    creating_date: '2020-09-21 13:47:55',
    user_id:1
  },
  {
    title: 'Is express an MVC?',
    content: `Express is just a framework to run your web server on top of node. js. It's up to you as the owner of the application if you wish to structure your code in Mode, Controller manner. ... 
    And if they use MVC style, they'd get MVC application.`,
    creating_date: '2021-11-29 10:22:00',
    user_id:1
  },
  {
    title: 'Q: What is npm for?',
    content: `A : npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.`,
    creating_date: '2019-05-04 17:50:18',
    user_id:2
  },
];

const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;
