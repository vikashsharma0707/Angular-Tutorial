import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templeteformvalidation.html', // Corrected file name
  // Removed styleUrls since you requested no CSS
})
export class Templateform {
  submitted = false;
  formData: any = {};

  onSubmit(form: any) {
    this.submitted = true;
    this.formData = form.value;
    console.log(form.value);
  }
}