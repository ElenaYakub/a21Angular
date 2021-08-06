import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";

let routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
