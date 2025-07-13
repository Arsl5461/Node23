const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SALT = bcrypt.genSaltSync(10);

exports.store = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.json({
        message: "Email Already exists",
        status: 403,
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, SALT);
    req.body.password = hashPassword;
    const user = await User.create(req.body);
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json({
      status: 200,
      success: true,
      message: "User Created Successfully",
      user,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.json({
        message: "Invalid Credentials",
        status: 403,
        success: false,
      });
    }
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (comparePassword) {
      const token = await jwt.sign(
        { id: findUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      return res.json({
        status: 200,
        success: true,
        message: "User login Successfully",
        token,
      });
    } else {
      return res.json({
        message: "Password Incorrect",
        status: 403,
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.index = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      status: 200,
      success: true,
      message: "User Fetched Successfully",
      users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
      return res.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!user) {
      return res.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: "User Updated Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};
