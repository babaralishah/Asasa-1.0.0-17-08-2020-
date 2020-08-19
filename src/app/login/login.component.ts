import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // // Regex Implementation here
  // loginForm = new FormGroup({
  //   email: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  //   });  
  //   //////////////////////

  loginForm: FormGroup; // Instance of Form grouo that will get form data from user end (i.e; login.html)
  // registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    public formBuilder: FormBuilder, // Creating an instance of Formbuilder
    public authService: AuthenticationService, // Instance of Authentication services created in front end
    public router: Router) {  
    //   this.loginForm= this.formBuilder.group({ // Instializes the Loginform
    //   email: [''],
    //   password: ['']
    // })
  }

  ngOnInit(): void { this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
  }
  get email(){
    return this.loginForm.get('email')
    }
  loginUser() {
    this.authService.login(this.loginForm.value)
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}