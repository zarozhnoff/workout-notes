import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";

import {RegistrationComponent} from "./registration/registration.component";
import {AccountRoutingModule} from "./account-router.module";
import {SignInComponent} from "./signin/signin.component";

@NgModule({
    imports: [SharedModule, AccountRoutingModule],
    declarations: [RegistrationComponent, SignInComponent]
})
export class AccountModule {
}