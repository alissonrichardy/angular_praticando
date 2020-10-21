import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'My Button';
  i = 0;
  spinnerMode = 'determinate'
  btnEnabled = true;
  selectDisabled = false;
  selectedOption = 1;

  constructor() { }

  ngOnInit() {
  }


  save(){
    console.log("Click");
  }

  inc(){
    this.i++;
    this.buttonName = 'Its was clicked ' + this.i + ' times';
  }

  disabled(){
    this.btnEnabled = false;
    this.spinnerMode= "indeterminate";
    setTimeout(() => {
      this.btnEnabled = true;
      this.spinnerMode = 'determinate';
    }, 3000)
  }

  cbChange(event){
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selectedOption = event.value;

  }
}
