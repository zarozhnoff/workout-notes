import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddTrainingComponent} from "./add-training/add-training.component";

@NgModule({
    declarations: [AddTrainingComponent],
    imports: [BrowserAnimationsModule],
    providers: [],
    exports: [AddTrainingComponent]
})
export class TrainingModule {
}