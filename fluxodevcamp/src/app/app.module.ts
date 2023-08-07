import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbartopComponent } from './components/navbartop/navbartop.component';
import { FormComponent } from './components/form/form.component';
import { TermosComponent } from './components/termos/termos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbartopComponent,
    FormComponent,
    TermosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
