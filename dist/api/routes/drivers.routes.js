"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drivers_controller_1 = require("../controllers/drivers.controller");
const authenticator_1 = require("../middlewares/auth/authenticator");
const drivers_validator_1 = require("../middlewares/validators/drivers.validator");
const router = express_1.Router();
// Drivers Routes:
// Get Drivers by season:
router.get('/season/:season', authenticator_1.Authenticator.authUser, drivers_validator_1.DriversValidator.seasonsFilterValidation, drivers_controller_1.DriversController.getDriversOfSeason);
// Get All seasons top 3 drivers:
router.get('/top', authenticator_1.Authenticator.authUser, drivers_controller_1.DriversController.getAllSeasonsTopDrivers);
// Get Driver profile:
router.get('/:id', authenticator_1.Authenticator.authUser, drivers_validator_1.DriversValidator.driverIdValidation, drivers_controller_1.DriversController.getDriverProfile);
exports.default = router;
