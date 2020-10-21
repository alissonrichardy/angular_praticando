import { Component, OnInit } from '@angular/core';

interface Client{
  fistName: string;
  lasName: string;
  birth: Date;
  gender: string;
  street: string;
  city: string;
  state: string;
  phone1: string;
  phone2: string;
}

@Component({
  selector: 'app-template-driver-form',
  templateUrl: './template-driver-form.component.html',
  styleUrls: ['./template-driver-form.component.css']
})
export class TemplateDriverFormComponent implements OnInit {

  cliente: Client = {fistName: '', lasName: '', birth: new Date(), gender: '', 
    state: '', city: '', phone1: '', phone2: '', street: ''};

  states = ['SP', 'PR', 'SC', "PA", 'RO', 'MA'];


  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
