import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ValidationErrorsDirective} from "./validation-errors.directive";


@NgModule({
    imports: [CommonModule],
    declarations: [ValidationErrorsDirective],
    exports: [CommonModule, FormsModule, ValidationErrorsDirective]
})
export class SharedModule {
}