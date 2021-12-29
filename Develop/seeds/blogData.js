const { Blog } = require('../models');

const blogdata = [
  {
    comment:"Awsome wfqfqwwg",
    user_id: 1,
    post_id: 1,
    },
    {
      comment:" Wonderful efweohfienfoqinefoinqe",
    user_id: 2,
    post_id: 2,
        },

];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
