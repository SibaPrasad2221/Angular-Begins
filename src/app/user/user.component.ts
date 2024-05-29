import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// to show dynamic record in the template we are accessing dummy users .ts file
//now we are accessing random no to pick random name each time we load the page

const random_Index = Math.floor(Math.random()*DUMMY_USERS.length)//to get the idx between 0 to highest idx present in that file


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[random_Index]; //seleteduser is a object now and bydefault it's public so we can use this variable there in template
}
