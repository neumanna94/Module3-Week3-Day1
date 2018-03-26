import { Component } from '@angular/core';
import { Task } from './models/task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: Task[] = [
    new Task('Task 1'),
    new Task('Task2'),
    new Task('Task3')
  ];
}
