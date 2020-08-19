// import { AlertModule } from 'ngx-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    ForgetpassverifyComponent,
    NewpassComponent
  ],
  imports: [
    HttpClientModule, 
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
