import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Angularifelse } from './angularifelse/angularifelse';
import { Angularelseif } from './angularelseif/angularelseif';
import { Angulartooglebutton } from './angulartooglebutton/angulartooglebutton';
import { Angularswitch } from './angularswitch/angularswitch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Angularifelse,Angularelseif,Angulartooglebutton,Angularswitch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   isLoggedIn = true
}
