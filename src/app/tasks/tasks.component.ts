import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, MatButtonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name: string | undefined;
}
