import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  staffId: number
  staff: User = {} as User

  constructor(private activatedRoute: ActivatedRoute, private staffService: UserServiceService, public router: Router) {
    this.staffId = this.activatedRoute.snapshot.params.id
  }

  editForm = new FormGroup({
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
    return this.editForm.get('firstName')
  }

  get lastName() {
    return this.editForm.get('lastName')
  }

  get password() {
    return this.editForm.get('password')
  }

  get confirmPassword() {
    return this.editForm.get('confirmPassword')
  }

  get role() {
    return this.editForm.get('role')
  }

  get title() {
    return this.editForm.get('title')
  }

  get email() {
    return this.editForm.get('email')
  }


  ngOnInit(): void {
    this.getStaffById(this.staffId)
    console.log(this.staff, '<<<')
    console.log(this.staff.lastName)
  }
  
  getStaffById(id: number) {
    // console.log('get byId ke trigger')
    // console.log(id, "id product")
    // console.log(typeof id, 'id data type')
    this.staffService 
    .getStaffById(id)
    .subscribe(s => {
      // console.log(s, "<<<<getbyId")
      this.staff = s
      //==setValue untuk editForm==
      this.editForm.controls['title'].setValue(s.title)
      this.editForm.controls['firstName'].setValue(s.firstName)
      this.editForm.controls['lastName'].setValue(s.lastName)
      this.editForm.controls['email'].setValue(s.email)
      this.editForm.controls['role'].setValue(s.role)
    })
  }

  updateStaff(id: number) {
    // console.log(this.editForm, '<<<edit form')
    this.staffService.updateStaff(id, this.editForm.value)
    .subscribe((res: any) => {
      // console.log('aku ke trigger')
      if(res) {
        // console.log(res, '<<<ress edit')
        this.editForm.reset()
        this.router.navigate(['/home'])
      }
    })
  }
}
