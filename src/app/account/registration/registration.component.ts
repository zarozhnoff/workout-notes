import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    hidePassword:boolean = true;
    isProcessing:boolean = false;
    showPasswordsNoMatchError:boolean = false;
    registrationForm:FormGroup;

    password:string = "";
    confirmPassword:string = "";

    constructor() {
        this.registrationForm = new FormGroup({
            "username": new FormControl("", [Validators.required]),
            "email": new FormControl("", [Validators.required, Validators.email]),
            "password": new FormControl("", [Validators.minLength(6), Validators.required]),
            "confirmPassword": new FormControl("", [Validators.minLength(6), Validators.required])
        });
    }


    changePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }

    register() {
        this.isProcessing = true;
        this.registrationForm.disable();
        setTimeout(() => {
                this.isProcessing = false;
                this.registrationForm.enable();
            },
            5000);
    }

    onPasswordChanged() {
        if (this.confirmPassword.length == 0) {
            this.showPasswordsNoMatchError = false;
        } else {
            this.showPasswordsNoMatchError = this.password != this.confirmPassword;
        }
    }
}