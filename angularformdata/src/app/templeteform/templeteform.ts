import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // NgIf, JsonPipe, etc.
import { FormsModule } from '@angular/forms';       // ngModel for template driven forms

@Component({
  selector: 'app-templeteform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templeteform.html',
})
export class Templeteform {
  user = {
    name: '',
    email: '',
    gender: ''
  };

  submitted = false;
  onSubmit(form?: any) {
    this.submitted = true;
    console.log('Form value:', form?.value ?? this.user);
  }
}
