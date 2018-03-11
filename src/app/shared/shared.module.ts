import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShowInputValidationDirective} from "./show-input-validation.directive";


@NgModule({
    imports: [CommonModule],
    declarations: [ShowInputValidationDirective],
    exports: [CommonModule, FormsModule, ShowInputValidationDirective]
})
export class SharedModule {
}