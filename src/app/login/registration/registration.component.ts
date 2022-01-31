import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';
import { Register } from 'src/app/register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerInForm!: FormGroup;
  submitFlag: boolean = false;
  userRegister = new Register("", "", "", "", "", "", "", "", "", "", "");

  constructor(private databaseservice: DatabaseService ,private router: Router) {

    this.registerInForm = new FormGroup(
      {
        email: new FormControl("", { validators: [Validators.required] }),
        password: new FormControl("", { validators: [Validators.required] }),
        retype: new FormControl("", { validators: [Validators.required] }),
        firstname: new FormControl("", { validators: [Validators.required] }),
        lastname: new FormControl("", { validators: [Validators.required] }),
        phone: new FormControl("", { validators: [Validators.required] }),
        dob: new FormControl("", { validators: [Validators.required] }),
        address: new FormControl("", { validators: [Validators.required] }),
        city: new FormControl("", { validators: [Validators.required] }),
        district: new FormControl("", { validators: [Validators.required] }),

      },
    );
  }

  ngOnInit(): void {
  }
  submit() {
    this.submitFlag = true;
    if (this.registerInForm.invalid) {

    }
    else {
      this.submitFlag = false;
      alert("Form is ready for submission");
    this.databaseservice.saveuser(this.userRegister);
      this.router.navigate(['/login/loginLink'])

    }
  }

}
