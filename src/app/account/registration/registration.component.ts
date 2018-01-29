import {Component} from '@angular/core';

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    hidePassword: boolean = true;
    isProcessing: boolean = false;

    username: string;
    email: string;
    password: string;
    confirmPassword: string;

    changePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }

    register() {
        this.isProcessing = true;
        setTimeout(() => {
                this.isProcessing = false;
            },
            5000);
    }

    onConfirmPasswordChanged() {
        if (this.password != this.confirmPassword) {
            alert("password");
        }
    }
}