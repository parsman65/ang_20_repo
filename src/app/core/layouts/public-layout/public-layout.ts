import { Component } from '@angular/core';
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [
    IconField,
    InputIcon,
    InputText,
    TranslatePipe,
    RouterOutlet
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
