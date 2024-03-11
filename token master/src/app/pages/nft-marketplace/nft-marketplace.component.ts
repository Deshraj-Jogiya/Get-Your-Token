import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { RouterOutlet } from "@angular/router";
import { slider } from "../../route-animations";


@Component({
  selector: "app-nft-marketplace",
  templateUrl: "nft-marketplace.component.html",
  animations: [
    //fader
    slider
    // transformer,
    //stepper
  ]
})
export class NftmarketplaceComponent implements OnInit, OnDestroy {
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
