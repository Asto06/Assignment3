import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  faEnvelope = faEnvelope;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  icon: any = faEye;

  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  message = '';

  input = 'password';

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  showPass() {
    if (this.input == 'password') {
      this.input = 'text';
      this.icon = faEyeSlash;
    } else {
      this.input = 'password';
      this.icon = faEye;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      (res) => {
        const token = res.token;
        this.tokenStorage.saveToken(token);
        this.tokenStorage.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.message = 'Login has been success';
        console.log(res);
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 2000);
      },
      (err) => {
        this.errorMessage = err.error.messagge;
        this.isLoginFailed = true;
        console.log(err);
      }
    );
  }
}
