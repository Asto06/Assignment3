import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './home/store/store.component';
import { FirstPageComponent } from './home/first-page/first-page.component';
import { AboutComponent } from './home/about/about.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductComponent } from './home/product/product.component';
import { Product2Component } from './home/product2/product2.component';
import { LocationComponent } from './home/location/location.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './home/review/review.component';
import { AllProductComponent } from './all-product/all-product.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    FirstPageComponent,
    NavbarComponent,
    ProductComponent,
    Product2Component,
    LocationComponent,
    RegisterComponent,
    ReviewComponent,
    StoreComponent,
    AllProductComponent,
    ProfileComponent,
    DetailProductComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
