import { Component } from '@angular/core';
import {UserSidebar} from '../../components/user-sidebar/user-sidebar';
import {UserHeader} from '../../components/user-header/user-header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [
    UserSidebar,
    UserHeader,
    RouterOutlet
  ],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss'
})
export class UserLayout {

}
