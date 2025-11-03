import { Component } from '@angular/core';
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-public-header',
  imports: [
    IconField,
    InputIcon,
    InputText,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss'
})
export class PublicHeader {

}
