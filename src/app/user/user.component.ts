import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // ! to tell typescript that it will be set to some value
  // { required: true } to indicate that the value is required in the app.component or wherever the app-user is used~
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// another option(signals):
//avatar = input.required<string>();
//name = input.required<string>();

//imagePath = computed(() => {
//  return 'assets/users/' + this.avatar();
//});
