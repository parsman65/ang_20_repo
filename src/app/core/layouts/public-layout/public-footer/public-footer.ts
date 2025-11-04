import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-public-footer',
  imports: [
    TranslatePipe
  ],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss',
  standalone: true,
})
export class PublicFooter {

}
