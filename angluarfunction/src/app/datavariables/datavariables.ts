import { Component } from '@angular/core';

@Component({
  selector: 'app-datavariables',
  imports: [],
  templateUrl: './datavariables.html',
  styleUrl: './datavariables.css'
})
export class Datavariables {
 name: string = 'Vikash';
  age: number = 26;
  isActive: boolean = true;
  skills: string[] = ['Angular', 'React', 'Node'];

  showDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Active: ${this.isActive}`);
    console.log(`Skills: ${this.skills.join(', ')}`);
  }

  constructor() {
    this.showDetails();
  }
}
