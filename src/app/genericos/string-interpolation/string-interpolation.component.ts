import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = 'John';
  age = 100;
  person = {
    firstname: 'Will',
    lastname: 'Smith',
    age: 50,
    address: 'Route 100'
  }

  constructor() { }

  ngOnInit() {
    // setInterval(() =>{
    //   console.log("ha ha")
    // }, 1000);
  }

}
