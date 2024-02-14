const mechanicModel = require("../models/mechanicModel");
const userModel = require("../models/userModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllMichanicController = async (req, res) => {
  try {
    const mechanics = await mechanicModel.find({});
    res.status(200).send({
      success: true,
      message: "Mechanics Data list",
      data: mechanics,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting mechanics data",
      error,
    });
  }
};

const changeAccountStatusController = async (req, res) => {
  try {
    const { mechanicId, status } = req.body;
    const mechanic = await mechanicModel.findByIdAndUpdate(mechanicId, {
      status,
    });
    const user = await userModel.findOne({ _id: mechanic.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "mechanic-account-request-updated",
      message: `Your mechanic Account Request Has ${status} `,
      onClickPath: "/notification",
    });
    user.isMechanic = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: mechanic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Account Status",
      error,
    });
  }
};

module.exports = {
  getAllMichanicController,
  getAllUsersController,
  changeAccountStatusController,
};
