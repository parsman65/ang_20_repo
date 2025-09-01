import {Component} from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet]
})
export class MainLayoutComponent {

}
