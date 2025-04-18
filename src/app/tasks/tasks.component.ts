import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { MatButtonModule } from '@angular/material/button';

import { DUMMY_TASKS } from '../../mock-data/tasks';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, MatButtonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = DUMMY_TASKS

  get userTasks()
  {
    return this.tasks.filter(task => task.assignedTo === this.userId);
  }
}
