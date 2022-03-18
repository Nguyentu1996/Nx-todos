import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'todos-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todos';
}
