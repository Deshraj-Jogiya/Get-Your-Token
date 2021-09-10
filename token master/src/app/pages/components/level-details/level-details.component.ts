import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-level-details",
  templateUrl: "level-details.component.html"
})
export class LeveldetailsComponent implements OnInit, OnDestroy {
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
