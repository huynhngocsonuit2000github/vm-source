import { Component } from '@angular/core';
import { TodoComponent } from './component/todo/todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-todo';
}

