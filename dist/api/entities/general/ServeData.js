"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeData = void 0;
class ServeData {
    constructor(handle, getDataArgs, buildResult, handler, reqName) {
        this.Handle = handle;
        this.GetDataArgs = getDataArgs;
        this.BuildResult = buildResult;
        this.Handler = handler;
        this.ReqName = reqName;
    }
}
exports.ServeData = ServeData;
