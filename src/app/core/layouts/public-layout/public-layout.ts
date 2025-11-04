import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PublicHeader} from './public-header/public-header';
import {PublicFooter} from './public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  imports: [
    RouterOutlet,
    PublicHeader,
    PublicFooter
  ],
  standalone: true,
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
