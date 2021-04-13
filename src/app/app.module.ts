import { AuthService } from './services/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Router} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

import {CommonModule} from "@angular/common";
import {NouisliderModule} from "ng2-nouislider";
import {JwBootstrapSwitchNg2Module} from "jw-bootstrap-switch-ng2";
import {HomeViewComponent} from './views/home-view/home-view.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardViewComponent } from './signin-form/dashboard-view/dashboard-view.component';
import { SignBaseViewComponent } from './views/sign-base-view/sign-base-view.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeViewComponent,
        SigninFormComponent,
        SignupFormComponent,
        DashboardViewComponent,
        SignBaseViewComponent,
        EmailComponent,
        SignupComponent,
        MembersComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        BrowserAnimationsModule
    ],
    providers: [
        AuthService,
],
    bootstrap: [AppComponent]
})
export class AppModule {
}
