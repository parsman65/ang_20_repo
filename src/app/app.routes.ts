import { Routes } from '@angular/router';
import {DashboardComponent, MainLayoutComponent} from './layouts/main-layout/main-layout.component.ts';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes')
          .then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.routes')
          .then(m => m.USERS_ROUTES)
      },
      {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.routes')
          .then(m => m.COURSES_ROUTES)
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.routes')
          .then(m => m.REPORTS_ROUTES)
      }
    ]
  }
];
