import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string = '';
  private currentUser = null;
  private userLoaded = new Subject<any>();
  public userLoaded$ = this.userLoaded.asObservable();

  // ensure do not load if it is in the promise
  // because many component use get current user function
  private _getUser: any;

  private allowFields = [
  'name', 'mobileNumber', 'flotno', 'streetAddress', 'city', 'zipCode', 'state', 'country', 'defaultAddress', 'mobileCode'
  ];

  constructor() { }

  getCurrentUser() {
    if (this.currentUser) {
      return new Promise(resolve => resolve(this.currentUser));
    }

    if (this._getUser && typeof this._getUser.then === 'function') {
      return this._getUser;
    }


    return this._getUser;
  }

  



  isLoggedin() {
    return localStorage.getItem('loggedIn') === 'Yes';
  }
  isAddress() {
    return localStorage.getItem('address');
  }

}
