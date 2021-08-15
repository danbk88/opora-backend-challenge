export class ErrorMsgs{
    public ErrorToClient: string;
    public ErrorToDeveloper: string;
    public StatusCode: number;

    constructor(etc:string, etd:string = '', isClientError: boolean = false) {
        this.ErrorToClient = etc;
        this.ErrorToDeveloper = etd || etc;
        this.StatusCode = isClientError ? 400 : 500
    }
}