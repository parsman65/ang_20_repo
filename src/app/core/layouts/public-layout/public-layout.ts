import { Component } from '@angular/core';
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterOutlet} from '@angular/router';
import {PublicHeader} from '../../components/public-header/public-header';
import {PublicFooter} from '../../components/public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  imports: [
    IconField,
    InputIcon,
    InputText,
    TranslatePipe,
    RouterOutlet,
    PublicHeader,
    PublicFooter
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
