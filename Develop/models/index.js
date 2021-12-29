const User = require('./User');
const Post = require('./Post');
const Blog = require ('./Blog');

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});




User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});


Post.hasMany(Blog, {
  foreignKey: 'post_id'
})


Blog.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
})






module.exports = { User,Post,Blog};
