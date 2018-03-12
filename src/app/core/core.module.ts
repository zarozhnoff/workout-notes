import {NgModule} from '@angular/core';
import {AuthService} from "./authentication/auth.service";
import {ApiService} from "./data/api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports:[HttpClientModule],
    declarations: [],
    providers: [ApiService, AuthService]
})
export class CoreModule {
}