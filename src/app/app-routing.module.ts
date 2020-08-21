import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';
const routes: Routes = [
  { path: 'map-component', component: MapComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'forgetpass-component', component: ForgetpassComponent },
  { path: 'forgetpassverify-component/:email', component: ForgetpassverifyComponent },
  { path: 'newpass-component', component: NewpassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
