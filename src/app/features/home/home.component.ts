import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
  }

}
