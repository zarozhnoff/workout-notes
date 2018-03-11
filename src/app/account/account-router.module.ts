import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {SignInComponent} from "./signin/signin.component";

const routes:Routes = [
    {path: 'signin', component: SignInComponent},
    {path: 'register', component: RegistrationComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
