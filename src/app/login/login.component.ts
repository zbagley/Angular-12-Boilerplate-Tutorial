import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public greeting = 'Login Form';
  public inputText = 'Default Value';

  constructor(private router: Router) {}

  public login() {
    this.router.navigateByUrl('/home');
  }
}
