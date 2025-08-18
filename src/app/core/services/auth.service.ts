import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // اینجا فرض می‌کنیم Spring Boot یک کوکی سشن می‌گذارد
  isLoggedIn(): boolean {
    // خیلی ساده: وجود کوکی JSESSIONID
    return document.cookie.includes('JSESSIONID=');
  }

  // در صورت نیاز می‌تونی از /api/me بک‌اند هم صدا بزنی
  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('user');
  // }
}
