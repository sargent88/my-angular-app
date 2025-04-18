import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Task } from './models/task.model';

@Component({
  selector: 'app-task',
  imports: [MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
}
