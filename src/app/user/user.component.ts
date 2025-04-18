import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// SIGNAL APPROACH
// import { Component, input, output, computed, signal } from '@angular/core';

interface User { id: string, name: string, avatar: string }
@Component({
  selector: 'app-user',
  imports: [MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() userInfo = new EventEmitter();

  // SIGNAL APPROACH
  // user = input.required<User>();
  // userInfo = output<string>();

  // imagePath = computed(() => `users/${this.user().avatar}`)

  get imagePath() {
    return `users/${this.user.avatar}`
  }


  showUserInfo() {
    // SIGNAL APPROACH
    // this.userInfo.emit(this.id());
    this.userInfo.emit(this.user.id);
  }
}
