import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';


export interface LifeCycleEvent{
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  nextEventId : number = 0;

  colors: string[] = ['accent', 'warn', 'primary'];


  constructor() {
    console.log(this.name + ' - contrutuctor');
    this.newEvent('contrutuctor');
  }



  ngOnInit() {
    console.log(this.name + ' - ngOnInit');
    this.newEvent('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name + ' - ngOnChanges');
    this.newEvent('ngOnChanges');
  }

  ngAfterContentInit(): void {
    console.log(this.name + ' - ngAfterContentInit');
    this.newEvent('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log(this.name + ' - ngAfterViewInit');
    this.newEvent('ngAfterViewInit');

  }

  ngOnDestroy(): void {
    console.log(this.name + ' - ngOnDestroy');
    this.newEvent('ngOnDestroy');

  }

  newEvent(name: string){
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      color: this.colors[ id % this.colors.length],
      name: name
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id ==id);
      if (idx >= 0)
        this.events.splice(idx, 1);
    }, 3000 + this.events.length* 2000);
  }
}
