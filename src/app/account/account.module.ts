import {NgModule} from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [],
    providers: []
})
export class AccountModule {
}