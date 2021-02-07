// const bcrypt = require('bcryptjs');
import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Colin Tale",
    email: "colin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ivy Lynn",
    email: "ivy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

// module.exports = users;
export default users;
