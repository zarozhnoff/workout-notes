import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";

import {RegistrationComponent} from "./registration/registration.component";
import {AccountRoutingModule} from "./account-router.module";
import {SignInComponent} from "./signin/signin.component";
import {UserService} from "./user.service";

@NgModule({
    imports: [SharedModule, AccountRoutingModule],
    declarations: [RegistrationComponent, SignInComponent],
    providers: [UserService]
})
export class AccountModule {
}