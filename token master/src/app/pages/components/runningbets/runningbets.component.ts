import { Component, OnInit, OnDestroy } from "@angular/core";
import { trigger, transition, style, animate, state, group } from '@angular/animations';

@Component({
  selector: "app-runningbets",
  templateUrl: "runningbets.component.html"
})
export class RunningbetsComponent{
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
    showNFTList : false,
    showNFT : false,
    isShowAdd : false,
    youPlaying : false,
    isReportwrong: false,
    isReportwrong2: false,
    isReportwrong3: false
  }
  constructor() {}

  onNftClickAdd = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = true;
  }

  onNftClickDelete = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = false;
  }

  onNftSingleClickAdd = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = false;
    this.displayNFT.showNFT = true;
  }

  onNftSingleClickDelete = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = false;
    this.displayNFT.showNFT = false;
  }

  onNftSingleClickBack = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = true;
    this.displayNFT.showNFT = false;
  }

  onNftSingleClickBet = (e: any) => {
    e.preventDefault();
    this.displayNFT.showNFTList = false;
    this.displayNFT.showNFT = false;
    this.displayNFT.isShowAdd = true;
  }

  onNftYouPlayingClick = (e: any) => {
    e.preventDefault();
    this.displayNFT.youPlaying = true;
  }
  onNftYouPlayingClickDelete = (e: any) => {
    e.preventDefault();
    this.displayNFT.youPlaying = false;
  }
}