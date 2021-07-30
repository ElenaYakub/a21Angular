import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello angular';

  users = [
    {name: 'vasya',age: 31, status: false},
    {name: 'masha',age:18,status: true}
  ];

}




