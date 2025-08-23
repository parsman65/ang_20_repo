import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  standalone: true
})
export class SidebarComponent {

  @Input() isOpen = false;


}
