import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarModule} from "./navbar/navbar.module";
import {AccountModule} from "./account/account.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, FormsModule, NavbarModule, AccountModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}