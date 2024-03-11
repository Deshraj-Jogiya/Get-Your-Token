import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';
import {  AuthService, CommonService } from '../services';

import { asciiToHex } from 'web3-utils';

import { Address } from 'ethereumjs-util';
import { Transaction } from '@ethereumjs/tx';

import { HttpClient, HttpErrorResponse,HttpHeaders,HttpResponse } from '@angular/common/http';
declare let window: any;

let contract_details  = require('../YFGsiouisudfiosd/contract_abi.js');

@Injectable({ 
  providedIn: 'root'  
})
export class ContractService {
  web3js: any;
  provider: any;
  accounts: any;
  uDonate: any; 
  APP_API_URL_WEB3:any= window.appConfig.contractNetworkURL;

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();
  private newOrganization = new Subject<any>();
  newOrganization$ = this.newOrganization.asObservable();

  constructor(private auth:AuthService,private http: HttpClient, private common:CommonService) {
    this.checkAccount();
  }

  async connectAccount() {
    var self=this;
    if (typeof window.web3 !== 'undefined') {
     this.provider = window.web3.currentProvider;
   } else {
     this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
   }  

    this.web3js = new Web3(this.provider); // create web3 instance
    if (window.web3 && window.web3.currentProvider.isMetaMask) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      let netID;
      await self.web3js.eth.net.getId(async (err, netID) => {
        if(netID != window.appConfig.ContratcNetworkID){  
         localStorage.removeItem('address');
         localStorage.removeItem('loggedIn');
         self.common.showError('Please connect to polygon network for further transactions');
        //  setTimeout(()=>{
        //   location.reload();
        // },1000);
       }else{
         self.web3js.eth.getAccounts(async function(err, accounts){
          if (accounts.length > 0) {
           localStorage.setItem('address',accounts[0]);
           localStorage.setItem('loggedIn','Yes');
           self.common.showSuccess('Metamask connected successfully');
          //  setTimeout(()=>{
          //   location.reload();
          // },1000);
         } else {
           localStorage.removeItem('address');
           localStorage.removeItem('loggedIn');
           self.common.showError('Please connect to a Metamask');
          //  setTimeout(()=>{
          //   location.reload();
          // },1000);
         }       });
       }
     });
    }else{
     localStorage.removeItem('address');
     localStorage.removeItem('loggedIn');
     this.common.showError('MetaMask account not detected :(');
   }

 }



 async getAccounts(){
  var self=this;
   this.web3js = new Web3(this.provider); // create web3 instance
   if (window.web3 && window.web3.currentProvider.isMetaMask) {
    var account = await this.web3js.eth.getAccounts();
    var accountInterval = setInterval(function() {
      if (account[0] === localStorage.getItem('address')) {
        localStorage.setItem('address',account[0]);
        localStorage.setItem('loggedIn','Yes');
      }else{
        localStorage.removeItem('address');
        localStorage.removeItem('loggedIn');
      }
    }, 100);
  }else{
   localStorage.removeItem('address');
   localStorage.removeItem('loggedIn');
   self.common.showError('MetaMask account not detected :(');
 }
 this.web3js.eth.net.getId((err, netID) => {
   if(netID != window.appConfig.ContratcNetworkID){
     localStorage.removeItem('address');
     localStorage.removeItem('loggedIn');
   }
 })
}




async getAccount(): Promise<any> {
 var self=this;
   this.web3js = new Web3(this.provider); // create web3 instance
   this.accounts = (await new Promise((resolve, reject) => {
     this.web3js.eth.getAccounts(async function(err, accounts){
      if (accounts.length > 0) {
       await self.web3js.eth.net.getId((err, netID) => {
         if(netID != window.appConfig.ContratcNetworkID){
           localStorage.removeItem('address');
           localStorage.removeItem('loggedIn');
           reject('No accounts found.');
         }else{
           localStorage.setItem('address',accounts[0]);
           localStorage.setItem('loggedIn','Yes');
          //  setTimeout(()=>{
          //   location.reload();
          // },1000);
           resolve(accounts[0]);
         }
       })

     } else {
       localStorage.removeItem('address');
       localStorage.removeItem('loggedIn');
       self.common.showError('Please connect to a Metamask');
       reject('No accounts found.');
     }
     if (err != null) {
      reject('Error retrieving account');
    }
  });
   })) as Promise<any>;
   return Promise.resolve(this.accounts);
 }  


async GetMainBalance(){
  if (typeof window.web3 !== 'undefined') {
   this.provider = window.web3.currentProvider;
 } else {
   this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
 }
 this.web3js = new Web3(this.provider);
 const useWeb3 = this.web3js;
 this.accounts = await useWeb3.eth.getAccounts(); 
 let account =  this.accounts.length > 0 ? this.accounts[0] : localStorage.getItem('address');
 useWeb3.eth.defaultAccount =account ;
 var myTokenBalance='0';
 await useWeb3.eth.getBalance(account,  function (err, result) {
  myTokenBalance =   useWeb3.utils.fromWei(result.toString(), "ether");
});
 var self=this;
 let netwkId;
 await self.web3js.eth.net.getId((err, netID) => {
  if(netID != window.appConfig.ContratcNetworkID){
    localStorage.removeItem('address');
    localStorage.removeItem('loggedIn');
    self.common.showError('Please connect to Polygon testnet for further transactions');
    // setTimeout(()=>{
    //   location.reload();
    // }, 3000);
  }
}); 

 return myTokenBalance;
}

async GetPenkyBalance(){
  if (typeof window.web3 !== 'undefined') {
   this.provider = window.web3.currentProvider;
 } else {
   this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
 }  
 this.web3js = new Web3(this.provider);
 const useWeb3 = this.web3js;
 this.accounts = await useWeb3.eth.getAccounts(); 
 let account =  this.accounts.length > 0 ? this.accounts[0] : localStorage.getItem('address');
 useWeb3.eth.defaultAccount =account ;
 let abi_details=contract_details.penky_Abi;
 const MyContract = await new useWeb3.eth.Contract(abi_details,contract_details.penky_Contract);
 let myTokenBalance=0;
 await MyContract.methods.balanceOf(account).call()
 .then(async function(result){
  myTokenBalance  = await useWeb3.utils.fromWei(result.toString(), "ether");
});
 return myTokenBalance;
}

async checkAccount() 
{
  var self=this;
  const Maskprovider = await detectEthereumProvider();
  if (typeof window.web3 !== 'undefined') {
   this.provider = window.web3.currentProvider;
 } else {
   this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
 }

 this.web3js = new Web3(this.provider);
 if (Maskprovider) {
  if (Maskprovider !== window.ethereum) {
    this.common.showError('Do you have multiple wallets installed?');
  }
}
window.ethereum.on('accountsChanged', async function (accounts) {
 localStorage.removeItem('address');
 localStorage.removeItem('loggedIn');
 await self.web3js.eth.net.getId(async (err, netID) => {
   if(netID != window.appConfig.ContratcNetworkID){
     localStorage.removeItem('address');
     localStorage.removeItem('loggedIn');
     self.common.showError('Please connect to polygon network for further transactions');
    //  setTimeout(()=>{
    //   location.reload();
    // }, 3000);
   }else{
     var account = await self.web3js.eth.getAccounts();
     localStorage.removeItem('address');
     localStorage.removeItem('loggedIn');
     localStorage.setItem('address',account[0]);
     localStorage.setItem('loggedIn','Yes');
     self.common.showSuccess('Metamask Account has been changed !');
    //  setTimeout(()=>{
    //   location.reload();
    // }, 3000);
   }
 })

 setInterval(async function () {
  let netwkId;
  await self.web3js.eth.net.getId((err, netID) => {
    if( netID != window.appConfig.ContratcNetworkID){ 
      localStorage.removeItem('address');
      localStorage.removeItem('loggedIn');
      self.common.showError('Please connect to polygon network for further transactions');
      // setTimeout(()=>{
      //   location.reload();
      // }, 3000);
    }
  })
}, 10);
});



if (window.web3 && window.web3.currentProvider.isUnlocked) {
 localStorage.removeItem('address');
 localStorage.removeItem('loggedIn');
 self.common.showError('Please connect to a Metamask');
//  setTimeout(()=>{
//   location.reload();
// }, 3000);
} else if (window.web3 && window.web3.currentProvider.isMetaMask) {
 this.web3js.eth.getAccounts(function(err, accounts){
  if (err != null) {
    localStorage.removeItem('address');
    localStorage.removeItem('loggedIn');
    // setTimeout(()=>{
    //   location.reload();
    // }, 3000);
  }
  else if (accounts.length == 0) {
    localStorage.removeItem('address');
    localStorage.removeItem('loggedIn');
  }
  else{
  } 
});
}else{
 localStorage.removeItem('address');
 localStorage.removeItem('loggedIn');
 this.common.showError('MetaMask account not detected :(');
//  setTimeout(()=>{
//   location.reload();
// }, 3000);
}



}

async checkAccuntchanged(){
 var self=this;
 const Maskprovider = await detectEthereumProvider();
 if (typeof window.web3 !== 'undefined') {
   this.provider = window.web3.currentProvider;
 } else {
   this.provider = new window.Web3.providers.HttpProvider(this.APP_API_URL_WEB3);
 }

 this.web3js = new Web3(this.provider);
 const useweb3=this.web3js;
 if (Maskprovider) {
  if (Maskprovider !== window.ethereum) {
    this.common.showError('Do you have multiple wallets installed?');
  }
}
var account = await useweb3.eth.getAccounts();
let accountsChanged=false;
if (account[0] != localStorage.getItem('address')) {
  accountsChanged=true;
}

window.ethereum.on('accountsChanged', async function (accounts) {
 await self.web3js.eth.net.getId((err, netID) => {
   if(netID != window.appConfig.ContratcNetworkID){
    accountsChanged=true;
  }else{
    accountsChanged=true;
  }
})
});

await this.web3js.eth.net.getId((err, netID) => {
  if(netID != window.appConfig.ContratcNetworkID){
    accountsChanged=true;
  }
});
return accountsChanged;
}



handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
  } else if (accounts[0] !== localStorage.getItem('address')) {
    localStorage.setItem('address',accounts[0])
    // Do any other work!
  }
}



toFixeds(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10,e-1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10,e);
      x += (new Array(e+1)).join('0');
    }
  }
  return x;
}



}