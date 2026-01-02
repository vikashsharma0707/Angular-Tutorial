import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,RouterLink,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=signal("Routing in Angular")
}
