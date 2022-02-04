import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-settings",
  templateUrl: "user-settings.component.html"
})
export class UsersettingsComponent implements OnInit, OnDestroy {
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
