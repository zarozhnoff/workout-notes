import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RegistrationComponent} from "./registration/registration.component";
import {AccountRoutingModule} from "./account-router.module";

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule, AccountRoutingModule],
    declarations: [RegistrationComponent]
})
export class AccountModule {
}