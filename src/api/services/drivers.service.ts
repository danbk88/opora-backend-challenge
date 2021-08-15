import { DriversDAL } from "../dal/drivers.dal";

export class DriversService {
    public async getDriversOfSeason(serviceData: { filters: any}) {
        const { filters } = serviceData;
        const driversDal = new DriversDAL();
        // Get drivers of season:
        const drivers = await driversDal.getDriversOfSeason(filters);
        return { drivers };
    }

    public async getAllSeasonsTopDrivers() {
        const driversDal = new DriversDAL();
        // Get all seasons top drivers:
        const seasonsTopDrivers = await driversDal.getAllSeasonsTopDrivers();
        return { seasonsTopDrivers };
    }

    public async getDriverProfile(serviceData: { driverId: any}) {
        const driversDal = new DriversDAL();
        const { driverId } = serviceData;

        // Get driver races:
        const races = await driversDal.getDriverProfile(driverId);
        return { races };
    }
}