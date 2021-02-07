// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// module.exports = generateToken;
export default generateToken;
