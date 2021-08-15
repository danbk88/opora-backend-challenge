"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMsgs_1 = require("../../entities/general/ErrorMsgs");
const ServeData_1 = require("../../entities/general/ServeData");
class BaseController {
    /**
    * ServeRequest
    * Base request serving flow
    *
    * @param {any} req request
    * @param {any} res response
    * @param {any} serveData Data needed to serve request
    *
    * @returns {Response}
    */
    static async ServeRequest(req, res, serveData) {
        let handleMethod = serveData.Handle;
        let getDataArgs = serveData.GetDataArgs;
        let buildResult = serveData.BuildResult;
        let handler = serveData.Handler;
        let reqName = serveData.ReqName;
        let errMsg = `Error occured on ${reqName} Request`;
        if (!handler) {
            throw new Error(errMsg + ' Internal Server error - Request handler is undefined');
        }
        try {
            let result = await handler.HandleRequest(getDataArgs, handleMethod, buildResult);
            if (result.error) {
                let err = result.error;
                if (err) {
                    const msg = errMsg + ": " + (err.ErrorToDeveloper || err.message);
                    console.log(msg);
                    const code = err.statusCode || err.status_code || 500;
                    delete err.status_code;
                    delete err.statusCode;
                    res.status(code).send(msg);
                }
            }
            else {
                BaseController.BuildResponse(res, result);
                res.send(result);
            }
        }
        catch (error) {
            console.log(errMsg + error.message);
            res.status(500).send(new ErrorMsgs_1.ErrorMsgs(errMsg, error.message));
        }
    }
    static CreateServeData(handle, getDataArgs, handler, reqName) {
        return new ServeData_1.ServeData(handle, getDataArgs, handler.buildResult, handler, reqName);
    }
    // ------------------------------------------------- RESPONSE BUILDERS ----------------------------------------------------
    /**
     * Build General Response from result
     * Structure: {Data, Success, Error}
     *
     * @param {any} res response
     *
     * @returns {any}  : General Response
     */
    static BuildResponse(res, result) {
        delete result.status_code;
        res.Data = result.Data;
        res.Error = result.Error;
    }
}
exports.default = BaseController;
