const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedBlog = require('./blogData');
const seedUser = require ('./UserData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await  seedUser();
  await seedPost();
  await seedBlog();

  process.exit(0);
};

seedAll();
