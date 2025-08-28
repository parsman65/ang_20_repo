import {Component, EventEmitter, Output} from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class MainLayoutComponent {

}
