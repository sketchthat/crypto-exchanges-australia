import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app.router.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './shared/app.material.module';
import { HomeComponent } from './home/home.component';
import { CoinjarComponent } from './coinjar/coinjar.component';
import { CommonExchangeComponent } from './common-exchange/common-exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinjarComponent,
    CommonExchangeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
