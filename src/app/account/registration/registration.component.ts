import {Component} from '@angular/core';

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    isProcessing: boolean = false;
    showPasswordsNoMatchError: boolean = false;
    username: string = "";
    email: string = "";
    password: string = "";
    confirmPassword: string = "";
    isMaleSelected: boolean = true;


    constructor() {
    }


    register() {
        this.isProcessing = true;
        setTimeout(() => {
                this.isProcessing = false;
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

    onFocused(htmlelement: HTMLInputElement) {
        htmlelement.classList.remove("is-valid");
        htmlelement.classList.remove("is-invalid");

    }

    onFocusedOut(htmlelement: HTMLInputElement) {
        if (htmlelement.validity.valid) {
            htmlelement.classList.add("is-valid");
            htmlelement.classList.remove("is-invalid");
        }
        else {

            htmlelement.classList.add("is-invalid");
            htmlelement.classList.remove("is-valid");
        }
    }
}