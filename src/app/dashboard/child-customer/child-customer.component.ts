import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-customer',
  templateUrl: './child-customer.component.html',
  styleUrls: ['./child-customer.component.scss']
})
export class ChildCustomerComponent implements OnInit {

  @Input() 
   parentData: any;
   
   @Output()
   childEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.childEvent.emit('Welcome');
  }

}
