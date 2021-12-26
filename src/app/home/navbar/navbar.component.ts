import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faBars = faBars;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  isDisplayHidden = false;
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
  }
  btnMenu(): void {
    this.isDisplayHidden = !this.isDisplayHidden;

    //   if (this.isDisplayHidden === false) {
    //     this.isDisplayHidden = true;
    //   } else {
    //     this.isDisplayHidden = false;
    //   }
    // }
  }

  logout(): void {
    this.tokenStorage.signOut();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
