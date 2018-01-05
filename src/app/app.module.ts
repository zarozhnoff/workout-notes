import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarModule} from "./navbar/navbar.module";
import {TrainingModule} from "./training/training.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, NavbarModule, TrainingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}