import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      answer: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log(this.form.value.answer);
    this.form.reset();
  }
}
