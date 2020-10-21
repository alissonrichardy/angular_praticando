import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parente-child',
  templateUrl: './parente-child.component.html',
  styleUrls: ['./parente-child.component.css']
})
export class ParenteChildComponent implements OnInit {

  ///Desse modo ele pega o primeiro elemento desse tipo
  //@ViewChild(TimerComponent)
  //private myTimmer: TimerComponent;
  //ID, OPTIONS ou - TIPO, OPTIONS (pega o primeiro elemento do tipo)
  @ViewChild('stopwatch2', {static: false} )
  private myTimmer: TimerComponent;

  @ViewChild('myP', {static: false})
  private myP: ElementRef;
  

  constructor() { }

  ngOnInit() {
  }

  public start(){
    this.myTimmer.start();

  }

  public stop(){
    this.myTimmer.stop();
  }

  public clear(){
    this.myTimmer.clear();
  }


  ngAfterViewInit(): void {
    this.myP.nativeElement.innerText = "Texto Alterado via metodo!";
    console.log(this.myP);
  }

}
