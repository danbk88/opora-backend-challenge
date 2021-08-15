import { DriversService } from "../services/drivers.service";
import { BaseRequestHandler } from "./base/baseRequest.handler";

export class DriversHandler extends BaseRequestHandler {
     public async getDriversOfSeason(reqData: any) {
        const driversService = new DriversService();
        const { filters } = reqData;

        const drivers = await driversService.getDriversOfSeason({filters});

        return { drivers };
    }
    
    public async getAllSeasonsTopDrivers(reqData: any) {
        const driversService = new DriversService();

        const drivers = await driversService.getAllSeasonsTopDrivers();

        return { drivers };
    }

    public async getDriverProfile(reqData: any) {
        const driversService = new DriversService();
        const { driverId } = reqData;

        const profile = await driversService.getDriverProfile({driverId});

        return { profile };
    }
}