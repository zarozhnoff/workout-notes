import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {NavbarComponent} from "./navbar.component";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MatToolbarModule, MatButtonModule
    ],
    exports:[NavbarComponent]
})
export class NavbarModule {
}