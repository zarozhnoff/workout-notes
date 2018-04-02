import {Gender} from "../entities/gender";

export class RegistrationDataContract {
    public username:string;
    public email:string;
    public password:string;
    public confirmPassword:string;
    public gender:Gender;

    constructor(username:string, email:string, password:string, confirmPassword:string, gender:Gender) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.gender = gender;
    }
}