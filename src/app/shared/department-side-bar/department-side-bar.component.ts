import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department/department.service';
import { DepartmentModel } from 'src/app/department/department-response';

@Component({
  selector: 'app-department-side-bar',
  templateUrl: './department-side-bar.component.html',
  styleUrls: ['./department-side-bar.component.css']
})
export class DepartmentSideBarComponent implements OnInit {
  departments: Array<DepartmentModel> = [];
  displayViewAll: boolean;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.getAllDepartments().subscribe(data => {
      if (data.length > 3) {
        this.departments = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.departments = data;
      }
    });
  }

  ngOnInit(): void { }

}
