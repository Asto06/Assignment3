import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    confirmPass: null,
    firstname: null,
    lastname: null,
    telephone: null,
    city: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  messages = '';
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  onSubmit(): void {
    const {
      email,
      password,
      confirmPass,
      firstname,
      lastname,
      telephone,
      city,
    } = this.form;

    this.authService
      .register(email, password, firstname, lastname, telephone, city)
      .subscribe(
        (res) => {
          console.log(res);
          this.isSuccessful = true;
          this.messages = 'Register has been success';
          this.isSignUpFailed = false;
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
