import {Injectable} from '@angular/core';
import {User} from "../entities/user";
import {ApiService} from "../data/api.service";
import {RegistrationDataContract} from "../datacontracts/registration-data-contract";
import {OperationResult} from "../common/operationResult";

@Injectable()
export class AuthService {
    isUserAuthentication:boolean;
    currentUser:User;


    constructor(private apiservice:ApiService) {
    }


    public register(dataContract:RegistrationDataContract):Promise<OperationResult<boolean>> {
        return this.apiservice.post<boolean>('account/register', dataContract);
    }

    public signIn():boolean {
        return undefined;
    }

    public logout():void {
    }
}