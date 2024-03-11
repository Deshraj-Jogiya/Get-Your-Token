import { Component, OnInit, OnDestroy } from "@angular/core";
import { trigger, transition, style, animate, state, group } from '@angular/animations';

@Component({
  selector: "app-closedbets",
  templateUrl: "closedbets.component.html"
})
export class ClosedbetsComponent{
  showDiv = {
    isShowDiv1 : false,
    isShowDiv2 : false,
    isShowDiv3 : false,
    isShowDiv4 : false,
    isShowDiv5 : false,
    isShowDiv6 : false
  }
  pagination1 = 1;
  animationState = 'in';
  displayNFT = {
    isReportwrong: false
  }
  constructor() {}

}