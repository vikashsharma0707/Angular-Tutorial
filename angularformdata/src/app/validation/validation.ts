



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  standalone: true,               // <- standalone component
  imports: [CommonModule, ReactiveFormsModule], // <- ReactiveFormsModule added
  // templateUrl: './app.html'
  templateUrl: './validation.html',
  styleUrl: './validation.css'
})
export class Validation {
  // form must exist with same name used in template
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  submitted = false;
  formData: any = null;

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.formData = this.userForm.value;
      console.log('Form submitted', this.formData);
      // do whatever next...
    } else {
      // mark controls touched to show validation messages
      Object.values(this.userForm.controls).forEach(ctrl => ctrl.markAsTouched());
    }
  }

  // helper for template
  get f() {
    return this.userForm.controls;
  }
}
