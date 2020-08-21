
import { RegisterResponse } from './RegisterResponse';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router) {
  }

  registerresponse: RegisterResponse;
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // check() {
  //   if (document.getElementById('password') ==
  //     document.getElementById('confirm')) {
  //     document.getElementById('message').style.color = 'green';
  //     document.getElementById('message').innerHTML = 'matching';
  //     console.log('check function 01');
  //   } else {
  //     document.getElementById('message').style.color = 'red';
  //     document.getElementById('message').innerHTML = 'password not matching';
  //     console.log('check function 02');
  //   }
  // }
  registerUser() {
    // this.check();
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value))

    // this.authService.getAll().subscribe((data) => {
    //   console.log(data);
    // })
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      // this.registerresponse = data;
      const email = this.registerForm.value.email;
      const msg = data.msg;
      const status = data.status;
      // console.log('Status: ' + status);
      if (status) {
        this.registerForm.reset();

        alert(msg);
        this.router.navigate(['signupotp-component', email]);
      }
      else {
        alert(msg);
      }
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  // }
}
