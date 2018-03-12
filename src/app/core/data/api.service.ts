import {HttpClient} from "@angular/common/http";
import {Muscle} from "../entities/muscle";
import {Training} from "../entities/training";
import {Injectable} from "@angular/core";
import {RegistrationDataContract} from "../datacontracts/registration-data-contract";

@Injectable()
export class ApiService {
    private apiHostUrl = "http://api";

    constructor(private http:HttpClient) {
    }

    public register(dataContract:RegistrationDataContract):boolean {
        return true;
    }

    public getAllMuscles():Muscle[] {
        return new Array<Muscle>();
    }

    public getTrainings():Training[] {
        return new Array<Training>();
    }

    public createTraining(training:Training):boolean {
        return true;
    }
}