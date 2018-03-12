import {Component} from '@angular/core';
import {AuthService} from "../../core/authentication/auth.service";
import {Gender} from "../../core/entities/gender";
import {RegistrationDataContract} from "../../core/datacontracts/registration-data-contract";

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    isProcessing:boolean = false;
    email:string = "";
    password:string = "";
    confirmPassword:string = "";
    isMaleSelected:boolean = true;


    constructor(private authService:AuthService) {
    }


    public onConfirmPasswordChanged(input:HTMLInputElement):void {
        if (this.password !== this.confirmPassword && this.password.length > 0 && this.confirmPassword.length > 0) {
            input.setCustomValidity("Пароли не совпадают");
        }
        else {
            input.setCustomValidity('');
        }
    }

    public register():void {
        this.isProcessing = true;
        var dataContract = this.createDataContract();
        var registrationResult = this.authService.register(dataContract);
        setTimeout(() => {
                this.isProcessing = false;
            },
            5000);
    }

    private createDataContract():RegistrationDataContract {
        return new RegistrationDataContract(
            this.email,
            this.password,
            this.confirmPassword,
            this.isMaleSelected ? Gender.Male : Gender.Female);
    }
}