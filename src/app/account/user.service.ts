import {ApiService} from "../core/data/api.service";
import {Injectable} from "@angular/core";
import {OperationResult} from "../core/common/operationResult";

@Injectable()
export class UserService {
    constructor(private apiservice:ApiService) {
    }


    public getIsUsernameFree(username:string):Promise<OperationResult<boolean>> {
        return this.apiservice.get<boolean>('account/usernameFree', [['username', username]]);
    }

    public getIsEmailFree(email:string):Promise<OperationResult<boolean>> {
        return this.apiservice.get<boolean>('account/emailFree', [['email', email]]);
    }
}