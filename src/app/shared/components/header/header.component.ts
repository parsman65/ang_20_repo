import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
