import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInForm!: FormGroup;
  submitFlag : boolean = false;

  constructor(private router: Router) {
    this.loginInForm= new FormGroup(
      { username: new FormControl("",{validators:[Validators.required]}),
      email: new FormControl("",{validators:[Validators.required]}),
      password: new FormControl("",{validators:[Validators.required]}),
     
    },
    );
  }

  ngOnInit(): void {
  }
  submit()
  {
    this.submitFlag = true;
    if(this.loginInForm.invalid)
    {

    }
    else{
      this.submitFlag = false;
      this.router.navigate(['/dashboard/dashboardlink']);
     
    }
  }


}
