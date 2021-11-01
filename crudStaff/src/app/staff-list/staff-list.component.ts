import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  
  staffs: User [] = []

  constructor(private staffService: UserServiceService) { }

  ngOnInit(): void {
    this.getStaffs()
  }

  getStaffs() {
    this.staffService
    .getStaff()
    .subscribe(staff => this.staffs = staff)
  }
}
