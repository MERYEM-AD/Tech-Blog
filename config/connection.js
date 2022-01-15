const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (true) {
  sequelize = new Sequelize("mysql://gzpd983w7gvxl3wm:c2tpf38vjjh68il7@exbodcemtop76rnz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lf0yxghf45zp66tk");
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}
module.exports = sequelize;
