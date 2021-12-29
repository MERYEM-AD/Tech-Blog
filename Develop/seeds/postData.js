const { Post } = require('../models');

const PostData = [
  {
    title: 'Post 1',
    content: 'content 1',
    creating_date: 'June 21, 2021 17:00:00',
    user_id:1
  },
  {
    title: 'Post 2',
    content: 'content 2',
    creating_date: 'September 22, 2021 22:00:00',
    user_id:1
  },
  {
    title: 'Post 3',
    content: 'content 3',
    creating_date: 'December 21, 2021 20:30:00',
    user_id:2
  },
  {
    title: 'Post 4',
    content: 'content 4',
    creating_date: 'March 19, 2021 19:00:00',
    user_id:2
  },
];

const seedPost = () => Post.bulkCreate(PostData);

module.exports = seedPost;
