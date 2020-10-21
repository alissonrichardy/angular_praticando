import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-material',
  templateUrl: './datatable-material.component.html',
  styleUrls: ['./datatable-material.component.css']
})
export class DatatableMaterialComponent implements OnInit {

  public produtos: any[] = [
    {name: 'Chocolate', price: 10.5, quantity: 30},
    {name: 'Leite', price: 5.5, quantity: 60},
    {name: 'Banana', price: 2.5, quantity: 160},
    {name: 'Chiquete', price: 0.5, quantity: 260},
  ];

  prodColumns: string[] = ['name', 'price', 'quantity'];



  constructor() {
    this.produtos = [
      {name: 'Chocolate', price: 10.5, quantity: 30},
      {name: 'Leite', price: 5.5, quantity: 60},
      {name: 'Banana', price: 2.5, quantity: 160},
      {name: 'Chiquete', price: 0.5, quantity: 260},
    ];
   }

  ngOnInit() {
    this.produtos = [
      {name: 'Chocolate', price: 10.5, quantity: 30},
      {name: 'Leite', price: 5.5, quantity: 60},
      {name: 'Banana', price: 2.5, quantity: 160},
      {name: 'Chiquete', price: 0.5, quantity: 260},
    ];
  }

}
