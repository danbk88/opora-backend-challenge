import { BaseRequestHandler } from '../../handlers/base/baseRequest.handler';

export class ServeData{
    Handle: Function;
    GetDataArgs: any;
    BuildResult: Function;
    Handler: BaseRequestHandler;
    ReqName: string;

    constructor(handle: Function, getDataArgs: any, buildResult: Function, handler: BaseRequestHandler, reqName: string) {
        this.Handle = handle;
        this.GetDataArgs = getDataArgs;
        this.BuildResult = buildResult;
        this.Handler = handler;
        this.ReqName = reqName;
    }
}