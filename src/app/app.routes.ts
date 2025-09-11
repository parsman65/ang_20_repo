import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomeComponent} from './features/home/home.component';
import {CourseDetailsComponent} from './features/courses/course-details/course-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'course-detail', component: CourseDetailsComponent}
    ]
  }
];
