import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core/core";
import {Muscle} from "./entities/muscle";
import {Training} from "./entities/training";

@Injectable()
export class DataService {
    private apiHostUrl = "http://api";

    constructor(private http:HttpClient) {
    }

    getAllMuscles():Muscle[] {
        return new Array<Muscle>();
    }

    getTrainings():Training[] {
        return new Array<Training>();
    }

    createTraining(training:Training):boolean {
        return true;
    }
}