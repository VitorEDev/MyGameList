import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeLogin(email: string, password: string): boolean {
    return email === 'admin@teste.com' && password === '123456';
  }
}
