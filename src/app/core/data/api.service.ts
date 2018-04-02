import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {OperationResultError} from "../common/operationResultError";
import {OperationResult} from "../common/operationResult";

@Injectable()
export class ApiService {
    private apiHostUrl:string;


    constructor(private http:HttpClient) {
        this.apiHostUrl = environment.apiUrl;
    }


    public post<T>(url:string, body:any):Promise<OperationResult<T>> {
        let absoluteUrl = this.getApiActionAbsoluteUrl(url);

        return new Promise<OperationResult<T>>((resolve) => {
            this.http.post<T>(absoluteUrl, body).subscribe(
                (value:T) => this.onGotResponse<T>(value, resolve),
                (error:HttpErrorResponse) => this.onErrorOccurred<T>(error, resolve));
        });
    }

    public get<T>(url:string, queryParameters?:[string, string][]):Promise<OperationResult<T>> {
        let absoluteUrl = this.getApiActionAbsoluteUrl(url);
        let httpParams = new HttpParams();
        for (let kvp of queryParameters) {
            httpParams = httpParams.append(kvp[0], kvp[1]);
        }

        return new Promise<OperationResult<T>>((resolve) => {
            this.http.get<T>(absoluteUrl, {params: httpParams}).subscribe(
                (value:T) => this.onGotResponse<T>(value, resolve),
                (error:HttpErrorResponse) => this.onErrorOccurred<T>(error, resolve)
            );
        });
    }


    private onGotResponse<T>(value:T, resolve:any):void {
        let result = OperationResult.createSuccessful<T>(value);

        resolve(result);
    }

    private onErrorOccurred<T>(error:HttpErrorResponse, resolve):void {
        let operationResultError = this.convertFromNumber(error.status);
        let result = OperationResult.createUnsuccessful<T>(operationResultError);

        resolve(result);
    }

    private getApiActionAbsoluteUrl(action:string) {
        return this.apiHostUrl + action;
    }

    private convertFromNumber(status:number):OperationResultError {
        switch (status) {
            case 0:
                return OperationResultError.ServerNotAvailable;
            case 400:
                return OperationResultError.BadRequest;
            case 401:
                return OperationResultError.NotAuthorized;
            default:
                return status >= 500 ? OperationResultError.ServerError : OperationResultError.Unknown;
        }
    }
}