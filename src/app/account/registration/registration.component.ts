import {Component} from '@angular/core';

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    hide = true;
    username:string;
    email:string;
    password:string;
    confirmPassword:string;

    register() {
        alert("click");
    }

    onConfirmPasswordChanged() {
        if (this.password != this.confirmPassword) {
            alert("password");
        }
    }
}