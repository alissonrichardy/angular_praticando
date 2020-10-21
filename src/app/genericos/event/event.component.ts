import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0;
  title = 'titulo do componente filho';

  constructor() { }

  ngOnInit() {
  }

  //Recebe um atributo atraves do output do componente 'child-item'
  incrementarByValorTakeChild(event){
    this.value += event;
    //console.log(event);
  }

  incBy(n: number) {
    this.value += n;
  }

  decBy(n: number) {
    this.value -= n;
  }

}
