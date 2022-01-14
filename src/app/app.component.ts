import { User } from 'src/app/model/user';
import { Component, Input } from '@angular/core';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'The good Angular programmer';

  userData!: User[]
  currentUser: User = new User

  constructor(private userService: UserService) {
    this.userData = this.userService.list
  }

  onSelectClick(user: User): void {
    this.currentUser = user
  }
  onUpdateClick(user: User): void {
    this.currentUser = user
    this.userService.updateUser(this.currentUser)
  }
  onDeleteClick(user: User): void {
    this.currentUser = user
    this.userService.removeUser(this.currentUser)
  }
}
