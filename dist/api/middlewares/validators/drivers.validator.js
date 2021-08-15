"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversValidator = void 0;
const validator_1 = __importDefault(require("validator"));
// import moment from 'moment';
// import { ETriggerTypes } from "../../entities/enums/triggers.enum";
class DriversValidator {
    static async seasonsFilterValidation(req, res, next) {
        try {
            const { season } = req.params;
            if (!season) {
                throw new Error("Validation Error - season is required");
            }
            if (validator_1.default.isNumeric(season) == false) {
                throw new Error("Validation Error - invalid season received");
            }
            // TODO:Add seasons from db validation
            // No validation errors:
            req.filters = {
                season
            };
            return next();
        }
        catch (error) {
            console.log(error.message);
            return res.status(400).send({ success: false, error: error.message });
        }
    }
    static async driverIdValidation(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw new Error("Validation Error - id is required");
            }
            if (validator_1.default.isNumeric(id) == false) {
                throw new Error("Validation Error - invalid id received");
            }
            // No validation errors:
            req.driverId = id;
            return next();
        }
        catch (error) {
            console.log(error.message);
            return res.status(400).send({ success: false, error: error.message });
        }
    }
}
exports.DriversValidator = DriversValidator;
