import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: StaffListComponent},
  {path: 'addStaff', component: AddStaffComponent},
  {path: 'staff/edit/:id', component: EditStaffComponent},
  // {path: 'staff/delete/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
