import {Component} from '@angular/core';
import {AuthService} from "../../core/authentication/auth.service";
import {Gender} from "../../core/entities/gender";
import {RegistrationDataContract} from "../../core/datacontracts/registration-data-contract";
import {OperationResult} from "../../core/common/operationResult";
import {UserService} from "../user.service";
import {OperationResultError} from "../../core/common/operationResultError";

@Component({
    selector: 'wn-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent {
    public isProcessing:boolean = false;
    public registrationError:string;

    public userName:string = "";
    public email:string = "";
    public password:string = "";
    public confirmPassword:string = "";
    public gender:Gender = Gender.Male;
    public isMaleSelected:boolean = true;

    public isCurrentUsernameChecked:boolean = false;
    public isCurrentUsernameFree:boolean;
    public isCheckingUsernameFree:boolean;
    public isCurrentEmailChecked:boolean = false;
    public isCurrentEmailFree:boolean;
    public isCheckingEmailFree:boolean;

    constructor(private authService:AuthService, private userService:UserService) {
    }


    public onConfirmPasswordChanged(input:HTMLInputElement):void {
        let error = this.password !== this.confirmPassword &&
        this.password.length > 0 && this.confirmPassword.length > 0 ? "Пароли не совпадают" : '';
        input.setCustomValidity(error);
    }

    public register():void {
        this.isProcessing = true;
        this.registrationError = null;

        let dataContract = this.createDataContract();
        this.authService.register(dataContract).then(result => {
            this.isProcessing = false;

            if (!result.isSuccessful) {
                this.registrationError = this.createErrorMessageFrom(result.error);
                return;
            }

            if (!result.result) {
                this.registrationError = "Произошла ошибка. Попробуйте позже.";
            }
        });
    }

    public onUsernameFocusedOut(input:HTMLInputElement):void {
        if (!input.validity.valid) {
            return;
        }

        this.isCheckingUsernameFree = true;
        this.userService.getIsUsernameFree(this.userName).then((result:OperationResult<boolean>) => {
            this.isCheckingUsernameFree = false;
            this.isCurrentUsernameChecked = result.isSuccessful;

            if (!result.isSuccessful) {
                return;
            }

            this.isCurrentUsernameFree = result.result;
            let userExistsError = this.isCurrentUsernameFree ? '' : 'error';
            input.setCustomValidity(userExistsError);
        });
    }

    public onEmailFocusedOut(input:HTMLInputElement):void {
        if (!input.validity.valid) {
            return;
        }

        this.isCheckingEmailFree = true;
        this.userService.getIsEmailFree(this.email).then((result:OperationResult<boolean>) => {
            this.isCheckingEmailFree = false;
            this.isCurrentEmailChecked = result.isSuccessful;

            if (!result.isSuccessful) {
                return;
            }

            this.isCurrentEmailFree = result.result;
            let emailExistsError = this.isCurrentEmailFree ? '' : 'error';
            input.setCustomValidity(emailExistsError);
        });
    }

    public onGenderChanged(isMaleSelected:boolean) {
        this.gender = isMaleSelected ? Gender.Male : Gender.Female;
        this.isMaleSelected = isMaleSelected;
    }

    private createDataContract():RegistrationDataContract {
        return new RegistrationDataContract(
            this.userName,
            this.email,
            this.password,
            this.confirmPassword,
            this.gender);
    }

    private createErrorMessageFrom(error:OperationResultError):string {
        switch (error) {
            case OperationResultError.BadRequest:
                return "Проверьте введённые данные";
            case OperationResultError.ServerNotAvailable:
            case OperationResultError.ServerError:
            case OperationResultError.Unknown:
                return "Произошла ошибка. Попробуйте позже."
        }
    }
}