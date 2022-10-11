import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewairlinesComponent } from './viewairlines/viewairlines.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:ViewairlinesComponent
  },
  {
    path:"view",component:ViewpassengerComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewairlinesComponent,
    ViewpassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
