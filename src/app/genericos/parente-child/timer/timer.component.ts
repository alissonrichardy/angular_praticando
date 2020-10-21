import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  protected miliseconds: number = 0;
  protected interval: any;
  protected running = false;

  constructor() { }

  ngOnInit() {
  }

  public start() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => { this.miliseconds += 50; }, 50);
    }

  }

  public stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }
  public clear() {
    this.miliseconds = 0;
  }

  public round(n: number){
    return Math.round(n);
  }

}
