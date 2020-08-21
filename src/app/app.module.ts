// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import {MaterialModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';
import { LoginComponent } from './login/login.component';
import { SignupotpComponent } from './signupotp/signupotp.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    ForgetpassverifyComponent,
    NewpassComponent,
    SignupotpComponent
  ],
  imports: [
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
