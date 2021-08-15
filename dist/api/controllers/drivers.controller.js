"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversController = void 0;
const drivers_handler_1 = require("../../api/handlers/drivers.handler");
const base_controller_1 = __importDefault(require("./Base/base.controller"));
class DriversController extends base_controller_1.default {
    /**
     * getDriversOfSeason
     * Gets Drivers by a given filters
     *
     * Request inputs: filters: {season: number}
     */
    static async getDriversOfSeason(req, res) {
        const handler = new drivers_handler_1.DriversHandler();
        const filters = req.filters;
        // Create serve data:
        let serveData = DriversController.CreateServeData(handler.getDriversOfSeason, { filters }, handler, "getDriversOfSeason");
        // Serve request:
        super.ServeRequest(req, res, serveData);
    }
    /**
     * getAllSeasonsTopDrivers
     * Gets All seasons top 3 drivers
     *
     */
    static async getAllSeasonsTopDrivers(req, res) {
        const handler = new drivers_handler_1.DriversHandler();
        // Create serve data:
        let serveData = DriversController.CreateServeData(handler.getAllSeasonsTopDrivers, {}, handler, "getAllSeasonsTopDrivers");
        // Serve request:
        super.ServeRequest(req, res, serveData);
    }
    /**
     * getDriverProfile
     * Gets All seasons top 3 drivers
     *
     */
    static async getDriverProfile(req, res) {
        const handler = new drivers_handler_1.DriversHandler();
        const driverId = req.driverId;
        // Create serve data:
        let serveData = DriversController.CreateServeData(handler.getDriverProfile, { driverId }, handler, "getDriverProfile");
        // Serve request:
        super.ServeRequest(req, res, serveData);
    }
}
exports.DriversController = DriversController;
