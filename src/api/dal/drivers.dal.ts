import { DriverStatsInSeason } from "../db/models/driverStatsInSeason";
import { BaseDAL } from "./base/base.dal";
import * as _ from 'lodash';
import { DriverInRace } from "../db/models/driverInRace";

export class DriversDAL extends BaseDAL{
    
    private readonly GET_DRIVERS_SP_NAME: string = "get_drivers_of_season_sp";
    private readonly GET_ALL_SEASONS_DRIVERS_SP_NAME: string = "get_all_seasons_top_drivers_sp";
    private readonly GET_DRIVER_PROFILE_SP_NAME: string = "get_driver_profile_sp";

    public async getDriversOfSeason(filters: any) {
        const sp = this.getGetDriversOfSeasonStoredProcedure(filters);
        return super.accessDB(sp, this.mapDriversOfSeasonResult.bind(this));
    }
    
    public async getAllSeasonsTopDrivers() {
        const sp = this.getGetAllSeasonsTopDriversStoredProcedure();
        return super.accessDB(sp, this.mapAllSeasonsTopDriversResult.bind(this));
    }

    public async getDriverProfile(driverId: any) {
        const sp = this.getDriverProfileStoredProcedure({driverId});
        return super.accessDB(sp, this.mapDriverProfileResult.bind(this));
    }

    // -----------------------------------------------------------      MAPPERS      ----------------------------------------------------------------------

    protected mapDriverProfileResult(res: any,) {
        const items = res[0];
        let driverInRaces: DriverInRace[] = [];

        items.forEach(item => {
            let driverInRace: DriverInRace = this.mapToDriverInRace(item);
            driverInRaces.push(driverInRace);
        });
        
        return driverInRaces;
    }

    protected mapDriversOfSeasonResult(res: any,) {
        const items = res[0];
        let drivers: DriverStatsInSeason[] = [];

        items.forEach(item => {
            let driverStats: DriverStatsInSeason = this.mapToDriverStats(item);
            drivers.push(driverStats);
        });
        
        return drivers;
    }

    protected mapAllSeasonsTopDriversResult(res: any,) {
        const items = res[0];
        let grouped = _.groupBy(items, 'year');

        Object.entries(grouped).forEach((entry:any) => {
            let drivers:any[] = [];
            entry[1].forEach(item => {
                let driverStats: DriverStatsInSeason = this.mapToTopDriverStats(item);
                drivers.push(driverStats);
            });
            grouped[`${entry[0]}`] = {topDrivers: drivers};
        });
        
        return grouped;
    }

    private mapToTopDriverStats(item: any): DriverStatsInSeason {

        let topDriverStats = this.mapToDriverStats(item);
        return topDriverStats;
    }

    private mapToDriverStats(item: any): DriverStatsInSeason {
        const driverStats = new DriverStatsInSeason();

        driverStats.driverId = item.driverId;
        driverStats.driverRef = item.driverRef;
        driverStats.nationality = item.nationality;
        driverStats.number = item.number;
        driverStats.forename = item.forename;
        driverStats.surname = item.surname;
        driverStats.points = item.points;
        driverStats.wins = item.wins;
        driverStats.url = item.url;
        driverStats.code = item.code;
        driverStats.dob = item.dob;
        driverStats.rank_in_season = item.rnk || null;

        return driverStats;
    }

    private mapToDriverInRace(item: any): DriverInRace {
        const driverInRace = new DriverInRace();

        driverInRace.driverId = item.driverId;
        driverInRace.raceId = item.raceId;
        driverInRace.circuitName = item.circuitName;
        driverInRace.position = item.position;
        driverInRace.points = item.points;
        driverInRace.avgPitStop = item.avgPit;
        driverInRace.minPitStop = item.minPit;
        driverInRace.maxPitStop = item.maxPit;
        driverInRace.pitStopsCount = item.pitsCount;
        driverInRace.avgLap = item.avgLap;
        driverInRace.minLap = item.minLap;
        driverInRace.maxLap = item.maxLap;

        return driverInRace;
    }

    // -----------------------------------------------------------      HELPERS      ----------------------------------------------------------------------

    private getGetDriversOfSeasonStoredProcedure(keys: any) {
        const args = `${keys.season}`;
        const sp = {
            name: this.GET_DRIVERS_SP_NAME,
            args 
        };

        return sp
    }

    private getGetAllSeasonsTopDriversStoredProcedure() {
        const args = '';
        const sp = {
            name: this.GET_ALL_SEASONS_DRIVERS_SP_NAME,
            args 
        };

        return sp
    }

    private getDriverProfileStoredProcedure(keys: any) {
        const args = `${keys.driverId}`;
        const sp = {
            name: this.GET_DRIVER_PROFILE_SP_NAME,
            args 
        };

        return sp
    }
}