import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  subscription1: Subscription;
  subscription2: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit() {
    this.s1 = 'Iniciatilizing!';
    this.s2 = 'Iniciatilizing!';
    const myFirstObservable = new Observable(
      (observable: Observer<number>) => {
        observable.next(1);
        observable.next(2);
        observable.next(3);
        observable.next(4);
        observable.next(5);
        observable.error('error');
        observable.complete();
      }
    );

    myFirstObservable.subscribe(
      (resp: number) => { console.log(resp); },
      (error: Error) => { console.error(error) },
      () => { console.log("completed"); }
    );

    // const timerCount = interval(500);
    // timerCount.subscribe(
    //   (resp) => {console.log(resp)},
    //   (error: Error) => {console.error(error)}
    // );
    //   console.log('After interval');

    const myIntervalObservable = new Observable(
      (observable: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log('from observable: ', i);
          if (i == 10)
            observable.complete();
          else
            if (i % 2 == 0)
              observable.next(i);
        }, 1000);
        return () => {
          clearInterval(id);
        }
      }
    );

      this.subscription1 = myIntervalObservable.subscribe(
        (resp) => {this.n1 = resp},
        (error: Error) => {this.s1 = 'Error: ' + error.message},
        () => {this.s1 = 'completed'}
      );
      this.subscription2 = myIntervalObservable.subscribe(
        (resp) => {this.n2 = resp},
        (error: Error) => {this.s2 = 'Error: ' + error.message},
        () => {this.s1 = 'completed'}
      );

      setTimeout(() => {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
      }, 11000);

  }

}
