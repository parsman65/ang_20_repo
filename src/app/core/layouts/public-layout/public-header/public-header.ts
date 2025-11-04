import { Component } from '@angular/core';
import {InputText} from "primeng/inputtext";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink, RouterModule} from '@angular/router';
import {ButtonDirective} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-public-header',
  imports: [
    InputText,
    TranslatePipe,
    RouterLink,
    RouterModule,
    ButtonDirective,
    FormsModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss'
})
export class PublicHeader {
  searchCourse: any;
  cartCount: any = 3;

  onSearchCourse() {

  }

  onAuthBtnClick() {

  }
}
