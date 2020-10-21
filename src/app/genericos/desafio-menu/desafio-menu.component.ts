import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-menu',
  templateUrl: './desafio-menu.component.html',
  styleUrls: ['./desafio-menu.component.scss']
})
export class DesafioMenuComponent implements OnInit {

  menuAtivo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
