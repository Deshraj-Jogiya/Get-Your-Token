import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-bet-history",
  templateUrl: "user-bet-history.component.html"
})
export class UserbethistoryComponent implements OnInit, OnDestroy {
  pagination1 = 1;
  showDiv = {
    view_tab : ''
  }
  constructor(private router: Router) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

  }

  onTabClick() {
    this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
