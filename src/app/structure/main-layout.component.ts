import {Component} from '@angular/core';
import {HeaderComponent} from '../shared/components/header/header.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main-layout.component.html',
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet
  ],
  standalone: true
})

export class MainLayoutComponent {
  sidebarOpen = false;
}
