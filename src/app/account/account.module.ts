import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {UserBarComponent} from "./userbar/userbar.component";

@NgModule({
    declarations: [LoginComponent, RegistrationComponent, UserBarComponent],
    imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatIconModule, MatRadioModule,
              MatCheckboxModule, MatCardModule, MatButtonModule],
    providers: [],
    exports: [RegistrationComponent]
})
export class AccountModule {
}