import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

let routes = [
  {path:'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'users',component: UsersComponent},
      {path:'posts',component: PostsComponent},
    ]),
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
