"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRequestHandler = void 0;
const Result_1 = require("../../entities/general/Result");
const ErrorMsgs_1 = require("../../entities/general/ErrorMsgs");
class BaseRequestHandler {
    async HandleRequest(reqData, handle, buildResult) {
        let result = new Result_1.Result();
        try {
            let res = await handle(reqData);
            if (!res && res !== {}) {
                throw new ErrorMsgs_1.ErrorMsgs('Internal error occured while handling Request');
            }
            result.result = buildResult(res);
            return result;
        }
        catch (error) {
            return this.buildErrorResult(error);
        }
    }
    //------------------------------------------- RESULT BUILDERS ----------------------------------------------------
    buildResult(resultData) {
        const result = Object.assign({}, resultData);
        return result;
    }
    buildPageDataResult(resultData) {
        let result = { page_data: resultData.pageData };
        return result;
    }
    buildErrorResult(error) {
        let res = new Result_1.Result();
        res.error = error; //new Error(error.message? error.message : error);
        res.status_code = error.StatusCode || 500;
        return res;
    }
}
exports.BaseRequestHandler = BaseRequestHandler;
