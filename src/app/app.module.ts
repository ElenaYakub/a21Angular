import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    //UserComponent,
    UsersComponent,
    UserComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
