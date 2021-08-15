import { DriversHandler } from "../../api/handlers/drivers.handler";
import BaseController from "./Base/base.controller";

export class DriversController extends BaseController {
    /**
     * getDriversOfSeason
     * Gets Drivers by a given filters
     * 
     * Request inputs: filters: {season: number}
     */
    public static async getDriversOfSeason(req: any, res: any){
        const handler = new DriversHandler();
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
     public static async getAllSeasonsTopDrivers(req: any, res: any){
        const handler = new DriversHandler();

        // Create serve data:
        let serveData = DriversController.CreateServeData(handler.getAllSeasonsTopDrivers, { }, handler, "getAllSeasonsTopDrivers");
        // Serve request:
        super.ServeRequest(req, res, serveData);
    }

    /**
     * getDriverProfile
     * Gets All seasons top 3 drivers
     * 
     */
     public static async getDriverProfile(req: any, res: any){
        const handler = new DriversHandler();
        const driverId = req.driverId;

        // Create serve data:
        let serveData = DriversController.CreateServeData(handler.getDriverProfile, { driverId }, handler, "getDriverProfile");
        // Serve request:
        super.ServeRequest(req, res, serveData);
    }
}