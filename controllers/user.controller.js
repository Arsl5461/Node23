const User = require("../model/user.model");

exports.store = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({
      status: 200,
      success: true,
      message: "User Created Successfully",
      user,
    });
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
    const user = await User.findOneAndUpdate({ _id: id },req.body,{new:true});
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
      user
    });
  } catch (err) {
    console.log(err);
  }
};