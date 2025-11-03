import { Component } from '@angular/core';
import {InstructorSidebar} from '../../components/instructor-sidebar/instructor-sidebar';
import {InstructorHeader} from '../../components/instructor-header/instructor-header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-instructor-layout',
  imports: [
    InstructorSidebar,
    InstructorHeader,
    RouterOutlet
  ],
  templateUrl: './instructor-layout.html',
  styleUrl: './instructor-layout.scss'
})
export class InstructorLayout {

}
