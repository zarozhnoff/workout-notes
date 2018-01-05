import {NgModule} from '@angular/core';
import {DataService} from "./data.service";
import {HttpClientModule}   from '@angular/common/http';

@NgModule({
    declarations: [DataService],
    imports: [HttpClientModule],
    providers: [DataService]
})
export class DataModule {
}