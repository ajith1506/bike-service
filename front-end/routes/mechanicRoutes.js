const express = require("express");
const {
  getMechanicInfoController,
  updateProfileController,
  getmechanicByIdController,
  mechanicAppointmentsController,
  updateStatusController,
} = require("../controllers/mechanicCtrl");
const authMiddleware = require("../middlewares/authMiddlewares");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getMechanicInfo", authMiddleware, getMechanicInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getMechanicById", authMiddleware, getmechanicByIdController);

//GET Appointments
router.get(
  "/mechanic-appointments",
  authMiddleware,
  mechanicAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
