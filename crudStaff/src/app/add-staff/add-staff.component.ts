import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  roles = ['Admin', 'User']
  titles = ['Mr', 'Mrs', 'Ms']

  constructor(public staffService: UserServiceService, public router: Router) { }

  registerForm = new FormGroup({

    title: new FormControl('', [
      Validators.required
    ]),
    firstName: new FormControl('', [
      Validators.required, 
      Validators.pattern('[a-zA-Z ]*')
    ]),
    lastName: new FormControl('', [
      Validators.required, 
      Validators.pattern('[a-zA-Z ]*')
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    role: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.minLength(6)
    ]),
  })

  get firstName() {
    return this.registerForm.get('firstName')
  }

  get lastName() {
    return this.registerForm.get('lastName')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

  get role() {
    return this.registerForm.get('role')
  }

  get title() {
    return this.registerForm.get('title')
  }

  get email() {
    return this.registerForm.get('email')
  }

  ngOnInit(): void {
  }

  createStaff() {
    console.log(this.registerForm, '<<<')
    this.staffService.createStaff(this.registerForm.value).subscribe((res: any) => {
      console.log('create ke triggerrr')
      if(res) {
        console.log(res, '<<<<res')
        this.registerForm.reset()
        this.router.navigate(['/home'])
      }
    })
  }

}
