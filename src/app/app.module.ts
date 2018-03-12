import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AppRoutingModule} from "./app-router.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [
        BrowserModule, FormsModule,
        AppRoutingModule, CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}