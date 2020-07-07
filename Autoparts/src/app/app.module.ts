import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{    CommonModule    }        from  '@angular/common';
import { FormsModule } from '@angular/forms'; 

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import {  CartComponent } from './cart/cart.component';
import {  CheckoutComponent } from './checkout/checkout.component';
// COMPONENTS
// =======================
import { HeaderComponent } from './components/header.component';
import { ProductListComponent } from './components/product-list.component';
import { CartdialogComponent } from './components/cart-dialog.component';

// SERVICES
// =======================
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';
// categories
//=======================
import { FoglightComponent } from './foglight/foglight.component';
import { HeadlightComponent } from './headlight/headlight.component';
import { TurnsignalComponent } from './turnsignal/turnsignal.component';
import { TyresComponent } from './tyres/tyres.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        NgbModule,
        ClickOutsideModule,
         BrowserAnimationsModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        HeaderComponent,
        ProductListComponent,
        CartdialogComponent,
        CartComponent,
        CheckoutComponent,
        FoglightComponent,
        HeadlightComponent,
        TurnsignalComponent,
        TyresComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        MyMainService,
        MySharedService
       
    ],
    bootstrap: [AppComponent,LoginComponent],
   
})
export class AppModule {

   
 };