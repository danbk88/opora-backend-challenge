"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversService = void 0;
const drivers_dal_1 = require("../dal/drivers.dal");
class DriversService {
    async getDriversOfSeason(serviceData) {
        const { filters } = serviceData;
        const driversDal = new drivers_dal_1.DriversDAL();
        // Get drivers of season:
        const drivers = await driversDal.getDriversOfSeason(filters);
        return { drivers };
    }
    async getAllSeasonsTopDrivers() {
        const driversDal = new drivers_dal_1.DriversDAL();
        // Get all seasons top drivers:
        const seasonsTopDrivers = await driversDal.getAllSeasonsTopDrivers();
        return { seasonsTopDrivers };
    }
    async getDriverProfile(serviceData) {
        const driversDal = new drivers_dal_1.DriversDAL();
        const { driverId } = serviceData;
        // Get driver races:
        const races = await driversDal.getDriverProfile(driverId);
        return { races };
    }
}
exports.DriversService = DriversService;
