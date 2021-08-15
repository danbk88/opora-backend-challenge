import validator from "validator";
// import moment from 'moment';
// import { ETriggerTypes } from "../../entities/enums/triggers.enum";

export class DriversValidator {
    public static async seasonsFilterValidation(req, res, next) {
        try {
            const { season } = req.params;
    
            if (!season) {
                throw new Error("Validation Error - season is required");
            }
            if (validator.isNumeric(season) == false) {
                throw new Error("Validation Error - invalid season received");
            }
            // TODO:Add seasons from db validation

            // No validation errors:
            req.filters = {
                season
            };
    
            return next();
        } catch (error) {
            console.log(error.message);
            return res.status(400).send({ success: false, error: error.message });
        }
    }
    
    public static async driverIdValidation(req, res, next) {
        try {
            const { id } = req.params;
    
            if (!id) {
                throw new Error("Validation Error - id is required");
            }
            if (validator.isNumeric(id) == false) {
                throw new Error("Validation Error - invalid id received");
            }

            // No validation errors:
            req.driverId = id;
    
            return next();
        } catch (error) {
            console.log(error.message);
            return res.status(400).send({ success: false, error: error.message });
        }
    }
}