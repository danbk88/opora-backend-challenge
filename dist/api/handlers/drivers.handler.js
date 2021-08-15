"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversHandler = void 0;
const drivers_service_1 = require("../services/drivers.service");
const baseRequest_handler_1 = require("./base/baseRequest.handler");
class DriversHandler extends baseRequest_handler_1.BaseRequestHandler {
    async getDriversOfSeason(reqData) {
        const driversService = new drivers_service_1.DriversService();
        const { filters } = reqData;
        const drivers = await driversService.getDriversOfSeason({ filters });
        return { drivers };
    }
    async getAllSeasonsTopDrivers(reqData) {
        const driversService = new drivers_service_1.DriversService();
        const drivers = await driversService.getAllSeasonsTopDrivers();
        return { drivers };
    }
    async getDriverProfile(reqData) {
        const driversService = new drivers_service_1.DriversService();
        const { driverId } = reqData;
        const profile = await driversService.getDriverProfile({ driverId });
        return { profile };
    }
}
exports.DriversHandler = DriversHandler;
