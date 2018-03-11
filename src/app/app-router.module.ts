import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes:Routes = [
    {path: 'account', loadChildren: 'app/account/account.module#AccountModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
