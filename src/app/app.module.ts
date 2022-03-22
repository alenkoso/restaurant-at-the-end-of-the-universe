import {BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider} from "./_helpers";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {appRoutingModule} from "./app.routing";
import {BrowserModule} from "@angular/platform-browser";;
import { MenuComponent } from './menu/menu.component'
import {ProductComponent} from "./menu/product.component";
import {ProductListComponent} from "./menu/product-list.component";
import {CartProductComponent} from "./menu/cart-product.component";
import {ShoppingCartComponent} from "./menu/shopping-cart.component";;
import { BillComponent } from './bill/bill.component'

// @ts-ignore
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule
  ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        MenuComponent,
      ProductComponent,
      ProductListComponent,
      CartProductComponent,
      ShoppingCartComponent
,
      BillComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
