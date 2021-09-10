import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-user-profile-level-details",
  templateUrl: "user-profile-level-details.component.html"
})
export class UserprofileleveldetailsComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("level-details-page");

    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("level-details-page");
  }
}
