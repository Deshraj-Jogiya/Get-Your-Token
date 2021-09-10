import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { ToastrService } from 'ngx-toastr';
import {Subject} from 'rxjs/Subject';
enum ToastPositionTypes {
  bottomCenter = 'toast-bottom-center',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  topCenter = 'toast-top-center',
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left'
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 headers: HttpHeaders;
 serviceHost = environment.apiMainUrl+'/';
 public toastrPositionTypes: typeof ToastPositionTypes = ToastPositionTypes;
 public toastrPosition: string = this.toastrPositionTypes.topRight;
 public timeOut = 3000;

 public address: any;
 accountVisibilityChange: Subject<boolean> = new Subject<boolean>();

 private userImage = new BehaviorSubject<string>('');
 userHeaderImage   = this.userImage.asObservable();

 private mobileClick = new BehaviorSubject<string>('');
 clickEnable = this.mobileClick.asObservable();
 token: any;
 constructor(private http:HttpClient,private router:Router,private toastrService: ToastrService) {
  var today = new Date();
  var gethours = today.getHours();
  var getminutes = today.getMinutes();
  var totime = gethours*60 + getminutes;
  this.accountVisibilityChange.subscribe((value) => {
    this.address = value;
  });
}

toggleAccountVisibility(response) {
  this.accountVisibilityChange.next(response);
}

postData(url,values): Observable<any> {   
 const headersParam = new HttpHeaders({authorization: "Bearer " + localStorage.getItem("token")});
 return this.http.post(this.serviceHost+url, values, { headers: headersParam })
}

getData(url): Observable<any> {
 return this.http.get(this.serviceHost+url)
}


loggedIn(){
  return !!localStorage.getItem('raccoon');
  return !!sessionStorage.getItem('usersession');
}



setToastrPosition(position: string): void {
  this.toastrPosition = position;
}

showSuccess(data){
  this.toastrService.success('', data);
}
showError(data){
  this.toastrService.error('', data);
}

getRaccoon(){
  return localStorage.getItem('raccoon');
  return sessionStorage.getItem('usersession');
}

toSubscriber(res:  HttpResponse<any>) {
  let body = res;
  return body || {};
}

handleError(error: HttpErrorResponse){
  return throwError(error);
}

changeImageToheader(Image){
  this.userImage.next(Image);
}

changetoggleIcons(action){
  this.mobileClick.next(action);
}

toFixed(num, fixed) {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}


}
