import {Component} from '@angular/core';

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    isProcessing: boolean = false;
    email: string = "";
    password: string = "";
    confirmPassword: string = "";
    isMaleSelected: boolean = true;


    constructor() {
    }


    public onConfirmPasswordChanged(input: HTMLInputElement): void {
        if (this.password !== this.confirmPassword && this.password.length > 0 && this.confirmPassword.length > 0) {
            input.setCustomValidity("Пароли не совпадают");
        }
        else {
            input.setCustomValidity('');
        }
    }

    public register(): void {
        this.isProcessing = true;
        setTimeout(() => {
                this.isProcessing = false;
            },
            5000);
    }
}