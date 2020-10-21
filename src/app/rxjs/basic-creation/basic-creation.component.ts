import { from, fromEvent, Observable, Observer, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  observableCreate() {
    const hello = new Observable(
      (observer: Observer<any>) => {
        observer.next('Hello');
        observer.next('From');
        observer.next('Observable');
        observer.complete();

      }
    );
    hello.subscribe(val => console.log(val));

  }


  fromClick(){
    from([1,2,3,4,5])
    .subscribe((v) => console.log(v));
  }

  ofClick(){
    of([1,2,3,4,5]).subscribe(v => console.log(v));
  }

  fromEventClick(){
    const subscription = fromEvent(document, 'click')
    .subscribe((e) => console.log(e));
  }
}
