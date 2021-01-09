const bcryptjs = require("bcryptjs");

const users = [
  {
    name: "Amit",
    email: "amitprime@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Amit",
    email: "amitraj@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "Amit",
    email: "am26y2@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

module.exports = users;