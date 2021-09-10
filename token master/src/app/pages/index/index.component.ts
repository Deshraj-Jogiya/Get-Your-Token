import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
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
