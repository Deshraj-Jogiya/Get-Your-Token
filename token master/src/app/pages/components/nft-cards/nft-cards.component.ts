import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-nft-cards",
  templateUrl: "nft-cards.component.html"
})
export class NftcardsComponent{
  showDiv = {
    isShowDiv1 : false,
    isShowDiv2 : false,
    isShowDiv3 : false,
    isShowDiv4 : false,
    isShowDiv5 : false,
    isShowDiv6 : false
  }
  pagination1 = 1;
  constructor() {}
}