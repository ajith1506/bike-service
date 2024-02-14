const appointmentModel = require("../models/appoinmentModel");
const mechanicModel = require("../models/mechanicModel");
const userModel = require("../models/userModel");
const getMechanicInfoController = async (req, res) => {
  try {
    const mechanic = await mechanicModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "mechanic data fetch success",
      data: mechanic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Mechanic Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const mechanic = await mechanicModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "mechanic Profile Updated",
      data: mechanic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Mechanic Profile Update issue",
      error,
    });
  }
};

const getmechanicByIdController = async (req, res) => {
  try {
    const mechanic = await mechanicModel.findOne({ _id: req.body.mechanicId });
    res.status(200).send({
      success: true,
      message: "Sigle mec Info Fetched",
      data: mechanic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Erro in Single mec info",
    });
  }
};

const mechanicAppointmentsController = async (req, res) => {
  try {
    const mechanic = await mechanicModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      mechanicId: mechanic._id,
    });
    res.status(200).send({
      success: true,
      message: "Mechanic Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/mechanic-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getMechanicInfoController,
  updateProfileController,
  getmechanicByIdController,
  mechanicAppointmentsController,
  updateStatusController,
};
