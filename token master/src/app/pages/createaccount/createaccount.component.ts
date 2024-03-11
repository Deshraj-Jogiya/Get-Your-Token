import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Router } from '@angular/router';
import { slider } from "../../route-animations";
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/services/constants'; 
import { ContractService, AuthService,CommonService } from '../../shared/services';

@Component({
  selector: "app-createaccount",
  templateUrl: "createaccount.component.html",
  animations: [ // <-- add your animations here
    //fader
    slider
    // transformer,
    //stepper
  ]
})
export class CreateaccountComponent implements OnInit, OnDestroy{
  public form: FormGroup;
  endPoint = Constants.API_ENDPOINT; 
  constructor(private router: Router, public fb: FormBuilder,
    private http: HttpClient, private commonService: CommonService) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      repeatemail: ['', Validators.required],
      referralcode: [''],
      nationality: ['', Validators.required],
      isprivacypolicy:['', Validators.required],
      personaldata: ['', Validators.required]
    })
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onCreateClick() {
    if (this.form.invalid) {
        this.commonService.showError('Please enter valid values');
        return;
    } 
    var formData: any = new FormData();
    formData.append("username", this.form.get('username').value);

    this.http.post(this.endPoint+'user_register', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    //this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}