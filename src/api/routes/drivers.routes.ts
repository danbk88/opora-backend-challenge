import { Router} from 'express';
import { DriversController } from '../controllers/drivers.controller';
import { Authenticator } from '../middlewares/auth/authenticator';
import { DriversValidator } from '../middlewares/validators/drivers.validator';
const router = Router();

// Drivers Routes:

// Get Drivers by season:
router.get('/season/:season',
    Authenticator.authUser,
    DriversValidator.seasonsFilterValidation,
    DriversController.getDriversOfSeason);

// Get All seasons top 3 drivers:
router.get('/top',
    Authenticator.authUser,
    DriversController.getAllSeasonsTopDrivers);

// Get Driver profile:
router.get('/:id',
    Authenticator.authUser,
    DriversValidator.driverIdValidation,
    DriversController.getDriverProfile);

export default router;