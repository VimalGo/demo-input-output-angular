import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  passDataFromParentToChild_Bool: boolean = false;
  passDataFromParentToChild_String: string = "Pass Parent Value To Child Component";
  passDataFromParentToChild_With_Input_Alias_String: string = "Pass Parent Value To Child Component With Input Alias";

  getDataFromChildToParent_String: string = '';
  getDataFromChildToParent_String_With_Output_Alias: string = '';

  parentMethodCall($event) {
    this.getDataFromChildToParent_String = $event;
  }

  parentMethodCall1($event) {
    this.getDataFromChildToParent_String_With_Output_Alias = $event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
