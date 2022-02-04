import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Router } from '@angular/router';
import Web3 from "web3";
import { ContractService, AuthService,CommonService } from '../../shared/services';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../shared/services/constants'; 

declare let window: any;
@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy{ 
  navbarCollapsed = true;
  public wallet_address:any;
  public account_address:any;
  public web3js: any;
  public provider: any;
  public APP_API_URL_WEB3:any= window.appConfig.contractNetworkURL;
  public wallet_balance: any =0.00;
  public conloading:boolean = false;
  endPoint = Constants.API_ENDPOINT; 

  toggleNavbarCollapsing() { this.navbarCollapsed = !this.navbarCollapsed; }
  constructor(private router: Router, private auth:AuthService, private contract: ContractService,private common: CommonService) {
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    console.log(this.endPoint);
    if (this.auth.isLoggedin() == true) {
    this.conloading=true;
      this.wallet_address = this.auth.isAddress();
      let first = this.wallet_address.slice(0, 6);
      this.wallet_balance = 0.00;

      let second = this.wallet_address.slice((this.wallet_address.length - 4), this.wallet_address.length);
      this.account_address = first + '...' + second;
        if (typeof window.web3 !== 'undefined') {
        this.provider = window.web3.currentProvider;
      } else {
        this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
      }
      this.getAccountBalance();
    }
  }

  // async ConnectWallet() {
    
  // }

  

  async onMetaMaskClick() {
    this.conloading = true;
    await this.contract.connectAccount().then( async resp => {
       await this.contract.getAccount().then(response => {
        setTimeout(() =>{
         this.router.navigate(['/create']);
        },1000);
      });
    });
    //this.router.navigate(['/create']);
  }

  async getAccountBalance() {
   await this.contract.GetPenkyBalance().then(resp => {
      this.wallet_balance = resp;
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}