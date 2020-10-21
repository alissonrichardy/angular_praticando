import { Client } from './clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age:number;

  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.clients.push({name: this.name, age: this.age });
    this.age = 0;
    this.name = '';
  }

  updateCliente(event, i){
    this.clients[i] = event;
  }

  deleteCliente(event, i){
    this.clients.splice(i, 1);
  }

}
