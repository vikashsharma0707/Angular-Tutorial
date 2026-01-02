import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contextualvariables } from './contextualvariables/contextualvariables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contextualvariables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=["a","b","c","d"]
  products=[]

 employees = [
    { id: 1, name: 'John', role: 'Developer' },
    { id: 2, name: 'Emma', role: 'Designer' },
    { id: 3, name: 'Mike', role: 'Manager' }
  ];
}
