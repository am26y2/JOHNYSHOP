const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Auth user & get Token
// @route GET Pst /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  req.send({email, password});
});
module.exports = authUser;
