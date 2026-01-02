import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validation } from './validation/validation';
import { Templeteform } from './templeteform/templeteform';
import { Templeteformvalidation } from './templeteformvalidation/templeteformvalidation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,Validation,Templeteform,Templeteformvalidation],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // properties must match template names (userForm, formData)
  submitted = false;
  formData: any = null;

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    this.submitted = true;
    this.formData = this.userForm.value;
    console.log(this.userForm.value);
  }
}
