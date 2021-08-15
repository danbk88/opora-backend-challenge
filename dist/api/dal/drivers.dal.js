"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversDAL = void 0;
const driverStatsInSeason_1 = require("../db/models/driverStatsInSeason");
const base_dal_1 = require("./base/base.dal");
const _ = __importStar(require("lodash"));
const driverInRace_1 = require("../db/models/driverInRace");
class DriversDAL extends base_dal_1.BaseDAL {
    constructor() {
        super(...arguments);
        this.GET_DRIVERS_SP_NAME = "get_drivers_of_season_sp";
        this.GET_ALL_SEASONS_DRIVERS_SP_NAME = "get_all_seasons_top_drivers_sp";
        this.GET_DRIVER_PROFILE_SP_NAME = "get_driver_profile_sp";
    }
    async getDriversOfSeason(filters) {
        const sp = this.getGetDriversOfSeasonStoredProcedure(filters);
        return super.accessDB(sp, this.mapDriversOfSeasonResult.bind(this));
    }
    async getAllSeasonsTopDrivers() {
        const sp = this.getGetAllSeasonsTopDriversStoredProcedure();
        return super.accessDB(sp, this.mapAllSeasonsTopDriversResult.bind(this));
    }
    async getDriverProfile(driverId) {
        const sp = this.getDriverProfileStoredProcedure({ driverId });
        return super.accessDB(sp, this.mapDriverProfileResult.bind(this));
    }
    // -----------------------------------------------------------      MAPPERS      ----------------------------------------------------------------------
    mapDriverProfileResult(res) {
        const items = res[0];
        let driverInRaces = [];
        items.forEach(item => {
            let driverInRace = this.mapToDriverInRace(item);
            driverInRaces.push(driverInRace);
        });
        return driverInRaces;
    }
    mapDriversOfSeasonResult(res) {
        const items = res[0];
        let drivers = [];
        items.forEach(item => {
            let driverStats = this.mapToDriverStats(item);
            drivers.push(driverStats);
        });
        return drivers;
    }
    mapAllSeasonsTopDriversResult(res) {
        const items = res[0];
        let grouped = _.groupBy(items, 'year');
        Object.entries(grouped).forEach((entry) => {
            let drivers = [];
            entry[1].forEach(item => {
                let driverStats = this.mapToTopDriverStats(item);
                drivers.push(driverStats);
            });
            grouped[`${entry[0]}`] = { topDrivers: drivers };
        });
        return grouped;
    }
    mapToTopDriverStats(item) {
        let topDriverStats = this.mapToDriverStats(item);
        return topDriverStats;
    }
    mapToDriverStats(item) {
        const driverStats = new driverStatsInSeason_1.DriverStatsInSeason();
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
    mapToDriverInRace(item) {
        const driverInRace = new driverInRace_1.DriverInRace();
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
    getGetDriversOfSeasonStoredProcedure(keys) {
        const args = `${keys.season}`;
        const sp = {
            name: this.GET_DRIVERS_SP_NAME,
            args
        };
        return sp;
    }
    getGetAllSeasonsTopDriversStoredProcedure() {
        const args = '';
        const sp = {
            name: this.GET_ALL_SEASONS_DRIVERS_SP_NAME,
            args
        };
        return sp;
    }
    getDriverProfileStoredProcedure(keys) {
        const args = `${keys.driverId}`;
        const sp = {
            name: this.GET_DRIVER_PROFILE_SP_NAME,
            args
        };
        return sp;
    }
}
exports.DriversDAL = DriversDAL;
