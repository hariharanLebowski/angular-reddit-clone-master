import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../department-response';
import { DepartmentService } from '../department.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {

  departments: Array<DepartmentModel>;
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
    }, error => {
      throwError(error);
    })
  }
}