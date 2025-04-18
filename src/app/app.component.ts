import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from '../mock-data/users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: string | undefined;

  get selectedUserName() {
    return this.users.find(user => user.id === this.selectedUser)?.name;
  }

  selectUser(id: string) {
    this.selectedUser = id;
    console.log('Selected user ID:', id);
  }


}
