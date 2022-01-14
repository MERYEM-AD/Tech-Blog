
const { User } = require('../models');
const UserDat = 
[
    {
      username: "meryem",
      password: "salma@",
    },
    {
      username: "salma",
      password: "meryem@",
    },
  ];


  const seedUser = () => User.bulkCreate(UserDat ,{individualHooks: true});

module.exports = seedUser;