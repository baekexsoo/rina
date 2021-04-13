import { SignBaseViewComponent } from './signin-form/sign-base-view/sign-base-view.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeViewComponent} from "./views/home-view/home-view.component";

const routes: Routes = [
    
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeViewComponent},
    {path: 'signin', component: SignBaseViewComponent},
    {path: 'signup', component: SignupFormComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
