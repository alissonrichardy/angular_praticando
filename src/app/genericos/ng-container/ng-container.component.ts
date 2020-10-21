import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: 'bob', role: 'admin', lastlogin: new Date('2/1/2018')},
    {login: 'lia', role: 'admin', lastlogin: new Date('2/1/2018')},
    {login: 'raf', role: 'admin', lastlogin: new Date('2/1/2018')},

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
