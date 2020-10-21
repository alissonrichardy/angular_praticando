import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.clientForm.value);
  }

}
