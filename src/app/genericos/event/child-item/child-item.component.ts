import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();

  //Output -> mandando valores
  @Output() eventSendValor = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  plusOneClick(){
    //this.plusOne.emit();
    this.eventSendValor.emit(1);
  }

  plusTwoClick(){
    //this.plusTwo.emit();
    this.eventSendValor.emit(2);
  }

  minusOneClick(){
    //this.minusOne.emit();
    this.eventSendValor.emit(-1);
  }

  minusTwoClick(){
    //this.minusTwo.emit();
    this.eventSendValor.emit(-2);
  }

}
