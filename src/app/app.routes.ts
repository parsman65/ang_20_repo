import { Routes } from '@angular/router';
import {CourseDetailsComponent} from './features/courses/course-details/course-details.component';
import {PublicLayout} from './core/layouts/public-layout/public-layout';
import {UserLayout} from './core/layouts/user-layout/user-layout';
import {AdminLayout} from './core/layouts/admin-layout/admin-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
      { path: 'register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
      { path: 'login', component: CourseDetailsComponent}
    ]
  },
  {
    path: 'user',
    component: UserLayout,
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboards/user-dashboard/user-dashboard').then(m => m.UserDashboard) },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboards/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) },
    ]
  },
  {
    path: '**', redirectTo: '',
  }
];
