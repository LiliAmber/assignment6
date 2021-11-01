import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffListComponent,
    AddStaffComponent,
    EditStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
