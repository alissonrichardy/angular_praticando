import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  fistName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.fistName.valueChanges
    .subscribe((newName) => console.log(newName));
  }

  setFirstName(){
    //this.fistName.setValue('Pou');
    console.log(this.fistName.value);
  }
}
