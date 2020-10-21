import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {


  @Input() name:string;
  nameBefore;


  constructor() { }


  ngOnInit() {
  }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes['name'].previousValue;
    }
  }


}
