import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RegistrationComponent} from "./registration/registration.component";

@NgModule({
    declarations: [RegistrationComponent],
    imports: [CommonModule, BrowserModule, FormsModule],
    providers: [],
    exports: [RegistrationComponent]
})
export class AccountModule {
}