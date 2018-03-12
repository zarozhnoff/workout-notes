import {Gender} from "../entities/gender";

export class RegistrationDataContract {
    public email:string;
    public password:string;
    public confirmPassword:string;
    public gender:Gender;

    constructor(email:string, password:string, confirmPassword:string, gender:Gender) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.gender = gender;
    }
}