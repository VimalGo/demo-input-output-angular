import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input()
  strInputProperty1: string = '';

  @Input()
  boolInputProperty2: boolean = false;

  @Input('strInputProperty3_With_Alias')
  strInputProperty3: string = '';

  @Output()
  eventForPassDataFromChildToParent = new EventEmitter<string>();

  @Output('eventForPassDataFromChildToParent_With_Alias')
  eventForPassDataFromChildToParent1 = new EventEmitter<string>();

  onButtonClick() {
    this.eventForPassDataFromChildToParent.emit("Pass Data From Child To Parent");
  }

  onButtonWithAliasClick() {
    this.eventForPassDataFromChildToParent1.emit("Pass Data From Child To Parent With Output Alias");
  }



  constructor() { }

  ngOnInit(): void {
  }

}
