import { Client } from './client';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lifecicle',
  templateUrl: './main-lifecicle.component.html',
  styleUrls: ['./main-lifecicle.component.css']
})
export class MainLifecicleComponent implements OnInit {

  public foods: string[] = ['Rice', 'Beans', 'Pizza'];
  public clients: Client[] = [];
  public name: string;
  public age: number;
  public food: string;

  private editClient: Client = null;

  constructor() { }

  ngOnInit() {
  }

  save() {
    if(this.editClient == null)
    this.clients.push({
      name: this.name,
      age: this.age,
      food: this.food
    });

    this.age = null;
    this.name = '';
    this.food = '';
  }

}
