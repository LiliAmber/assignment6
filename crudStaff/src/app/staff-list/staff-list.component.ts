import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  
  staffId: number
  staffs: User [] = []

  constructor(private staffService: UserServiceService, private activatedRoute: ActivatedRoute, public route: Router) { 
    this.staffId = this.activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getStaffs()
  }

  getStaffs() {
    this.staffService
    .getStaff()
    .subscribe(staff => this.staffs = staff)
  }

  deleteStaff(id: number) {
    // console.log('delete ke trigger')
    this.staffService
    .deleteStaff(id)
    .subscribe((res: any) => {
      if(res) {
        // console.log(res, '<<<<res delete')
        this.getStaffs()
      }
    })
  }
}
