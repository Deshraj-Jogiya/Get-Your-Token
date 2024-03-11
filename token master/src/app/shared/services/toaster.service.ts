import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }
  config:any = {timeOut: 3000,progressBar:true,closeButton:true,positionClass :'toast-top-right'}
  success(title,message) {
    this.toastr.success(message, title,  this.config);
  }

  error(title,message){
    this.toastr.error(message, title, this.config );    
  }

  warning(title,message){
    this.toastr.warning(message, title, this.config );    
  }

  info(title,message){
    this.toastr.info(message, title, this.config );    
  }
}
