import { Client } from '../clients.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-clients',
  templateUrl: './item-clients.component.html',
  styleUrls: ['./item-clients.component.css']
})
export class ItemClientsComponent implements OnInit {

  @Input() client: Client;
  @Output() updateClient: EventEmitter<Client> = new EventEmitter<Client>();
  @Output() removeClient: EventEmitter<Client> = new EventEmitter<Client>();

  onEdit: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  edit(){
    this.onEdit = true;
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit(this.client);
  }

  remove(){
    this.removeClient.emit(this.client);
  }
}
