import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    TranslatePipe, IconFieldModule, InputIconModule, InputText
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
