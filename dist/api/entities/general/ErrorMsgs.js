"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMsgs = void 0;
class ErrorMsgs {
    constructor(etc, etd = '', isClientError = false) {
        this.ErrorToClient = etc;
        this.ErrorToDeveloper = etd || etc;
        this.StatusCode = isClientError ? 400 : 500;
    }
}
exports.ErrorMsgs = ErrorMsgs;
