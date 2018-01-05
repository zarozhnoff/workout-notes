import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AddTrainingComponent} from "./add-training/add-training.component";

@NgModule({
    declarations: [AddTrainingComponent],
    imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
    providers: [],
    exports: [AddTrainingComponent]
})
export class TrainingModule {
}