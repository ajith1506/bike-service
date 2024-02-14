const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyMechanicController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllMechanicsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddlewares, authController);

router.post("/apply-mechanic", authMiddlewares, applyMechanicController);

//Notifiaction
router.post(
  "/get-all-notification",
  authMiddlewares,
  getAllNotificationController
);
//Notifiaction  || POST
router.post(
  "/delete-all-notification",
  authMiddlewares,
  deleteAllNotificationController
);

//GET ALL
router.get("/getAllMechanics", authMiddlewares, getAllMechanicsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddlewares, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddlewares,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddlewares, userAppointmentsController);

module.exports = router;
