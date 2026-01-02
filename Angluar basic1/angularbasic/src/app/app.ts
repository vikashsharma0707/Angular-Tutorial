import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Signup } from './signup/signup';
import  { Profiledata } from "./profile/profile"

@Component({
  selector: 'app-root',
  imports: [User,Signup,Profiledata],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularbasic');
}
