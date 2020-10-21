import { Client } from './client.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('nome') name: string;

  @Input('sobrenome') lastname: string;

  @Input("idade") age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "bob", age: 30},
      {id: 1, name: "fill", age: 30},
      {id: 1, name: "raf", age: 30}
    ];
   }

  ngOnInit() {
  }

}
