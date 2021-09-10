import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-achievements",
  templateUrl: "user-achievements.component.html"
})
export class UserachievementsComponent implements OnInit, OnDestroy {
  pagination1 = 1;
  showDiv = {
    view_tab : '',
    showAchivement1: true,
    showAchivement2: false,
    showAchivement3: false,
    showAchivement4: false,
    showAchivement5: false,
    showAchivement6: false
  }
  constructor(private router: Router) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

  }

  onTabClick() {
    this.router.navigate(['/register']);
  }

  showDivAchievement1 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = true;
    this.showDiv.showAchivement2 = false;
    this.showDiv.showAchivement3 = false;
    this.showDiv.showAchivement4 = false;
    this.showDiv.showAchivement5 = false;
    this.showDiv.showAchivement6 = false;
  }

  showDivAchievement2 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = false;
    this.showDiv.showAchivement2 = true;
    this.showDiv.showAchivement3 = false;
    this.showDiv.showAchivement4 = false;
    this.showDiv.showAchivement5 = false;
    this.showDiv.showAchivement6 = false;
  }

  showDivAchievement3 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = false;
    this.showDiv.showAchivement2 = false;
    this.showDiv.showAchivement3 = true;
    this.showDiv.showAchivement4 = false;
    this.showDiv.showAchivement5 = false;
    this.showDiv.showAchivement6 = false;
  }

  showDivAchievement4 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = false;
    this.showDiv.showAchivement2 = false;
    this.showDiv.showAchivement3 = false;
    this.showDiv.showAchivement4 = true;
    this.showDiv.showAchivement5 = false;
    this.showDiv.showAchivement6 = false;
  }

  showDivAchievement5 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = false;
    this.showDiv.showAchivement2 = false;
    this.showDiv.showAchivement3 = false;
    this.showDiv.showAchivement4 = false;
    this.showDiv.showAchivement5 = true;
    this.showDiv.showAchivement6 = false;
  }

  showDivAchievement6 = (event: any) => {
    event.preventDefault();
    this.showDiv.showAchivement1 = false;
    this.showDiv.showAchivement2 = false;
    this.showDiv.showAchivement3 = false;
    this.showDiv.showAchivement4 = false;
    this.showDiv.showAchivement5 = false;
    this.showDiv.showAchivement6 = true;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
